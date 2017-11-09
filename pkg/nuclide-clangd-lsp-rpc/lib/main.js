/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 *
 * @flow
 * @format
 */

import type {
  FindReferencesReturn,
  DefinitionQueryResult,
  Outline,
  CodeAction,
} from 'atom-ide-ui';
import type {TextEdit} from 'nuclide-commons-atom/text-edit';
import type {NuclideUri} from 'nuclide-commons/nuclideUri';
import type {DeadlineRequest} from 'nuclide-commons/promise';
import type {ConnectableObservable} from 'rxjs';
import type {ClangRequestSettings} from '../../nuclide-clang-rpc/lib/rpc-types';
import type {NuclideEvaluationExpression} from '../../nuclide-debugger-interfaces/rpc-types';
import type {HostServices} from '../../nuclide-language-service-rpc/lib/rpc-types';
import type {
  LanguageService,
  FileDiagnosticMap,
  AutocompleteRequest,
  AutocompleteResult,
  FormatOptions,
  FileDiagnosticMessage,
} from '../../nuclide-language-service/lib/LanguageService';
import type {
  LogLevel,
  AdditionalLogFile,
} from '../../nuclide-logging/lib/rpc-types';
import type {
  FileNotifier,
  FileVersion,
} from '../../nuclide-open-files-rpc/lib/rpc-types';
import type {SymbolResult} from '../../nuclide-quick-open/lib/types';
import type {CoverageResult} from '../../nuclide-type-coverage/lib/rpc-types';
import type {TypeHint} from '../../nuclide-type-hint/lib/rpc-types';

import invariant from 'assert';
import which from 'nuclide-commons/which';
import {getLogger} from 'log4js';
import {FileCache} from '../../nuclide-open-files-rpc';
import ClangdLanguageServer from './ClangdLanguageServer';

export interface ClangdLanguageService extends LanguageService {
  isFileKnown(filePath: NuclideUri): Promise<boolean>,
  addClangRequest(clangRequest: ClangRequestSettings): Promise<boolean>,
  // Below copied from LanguageService
  // TODO pelmers: why doesn't service-parser handle extends?
  getDiagnostics(fileVersion: FileVersion): Promise<?FileDiagnosticMap>,

  observeDiagnostics(): ConnectableObservable<FileDiagnosticMap>,

  getAutocompleteSuggestions(
    fileVersion: FileVersion,
    position: atom$Point,
    request: AutocompleteRequest,
  ): Promise<?AutocompleteResult>,

  getDefinition(
    fileVersion: FileVersion,
    position: atom$Point,
  ): Promise<?DefinitionQueryResult>,

  findReferences(
    fileVersion: FileVersion,
    position: atom$Point,
  ): Promise<?FindReferencesReturn>,

  getCoverage(filePath: NuclideUri): Promise<?CoverageResult>,

  getOutline(fileVersion: FileVersion): Promise<?Outline>,

  getCodeActions(
    fileVersion: FileVersion,
    range: atom$Range,
    diagnostics: Array<FileDiagnosticMessage>,
  ): Promise<Array<CodeAction>>,

  typeHint(fileVersion: FileVersion, position: atom$Point): Promise<?TypeHint>,

  highlight(
    fileVersion: FileVersion,
    position: atom$Point,
  ): Promise<?Array<atom$Range>>,

  formatSource(
    fileVersion: FileVersion,
    range: atom$Range,
    options: FormatOptions,
  ): Promise<?Array<TextEdit>>,

  formatEntireFile(
    fileVersion: FileVersion,
    range: atom$Range,
    options: FormatOptions,
  ): Promise<?{
    newCursor?: number,
    formatted: string,
  }>,

  formatAtPosition(
    fileVersion: FileVersion,
    position: atom$Point,
    triggerCharacter: string,
    options: FormatOptions,
  ): Promise<?Array<TextEdit>>,

  getAdditionalLogFiles(
    deadline: DeadlineRequest,
  ): Promise<Array<AdditionalLogFile>>,

  getEvaluationExpression(
    fileVersion: FileVersion,
    position: atom$Point,
  ): Promise<?NuclideEvaluationExpression>,

  supportsSymbolSearch(directories: Array<NuclideUri>): Promise<boolean>,

  symbolSearch(
    query: string,
    directories: Array<NuclideUri>,
  ): Promise<?Array<SymbolResult>>,

  getProjectRoot(fileUri: NuclideUri): Promise<?NuclideUri>,

  isFileInProject(fileUri: NuclideUri): Promise<boolean>,

  getExpandedSelectionRange(
    fileVersion: FileVersion,
    currentSelection: atom$Range,
  ): Promise<?atom$Range>,

  getCollapsedSelectionRange(
    fileVersion: FileVersion,
    currentSelection: atom$Range,
    originalCursorPosition: atom$Point,
  ): Promise<?atom$Range>,

  dispose(): void,
}

/**
 * Creates a language service capable of connecting to an LSP server.
 *
 * TODO: Document all of the fields below.
 */
export async function createClangdService(params: {|
  fileNotifier: FileNotifier,
  host: HostServices,
  logCategory: string,
  logLevel: LogLevel,
|}): Promise<?ClangdLanguageService> {
  const command = 'clangd';
  const languageId = 'clangd';
  const logger = getLogger(params.logCategory);
  logger.setLevel(params.logLevel);

  if ((await which(command)) == null) {
    const message = `Command "${command}" could not be found: ${languageId} language features will be disabled.`;
    logger.warn(message);
    params.host.consoleNotification(languageId, 'warning', message);
    return null;
  }

  const fileCache = params.fileNotifier;
  invariant(fileCache instanceof FileCache);

  return new ClangdLanguageServer(
    'clangd', // id
    'clangd', // command
    logger,
    fileCache,
    params.host,
  );
}
