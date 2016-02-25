

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

/**
 * This is the set of modules that are "built-in" and never need to be required.
 */
module.exports = new Set(['Array', 'Boolean', 'Date', 'Error', 'Function', 'Infinity', 'JSON', 'Math', 'Number', 'Object', 'Promise', 'RegExp', 'String', 'Symbol', 'arguments', 'global', 'isFinite', 'isNaN', 'parseFloat', 'parseInt', 'undefined', 'console',

// Browser built ins.
'alert', 'clearInterval', 'clearTimeout', 'confirm', 'decodeURI', 'decodeURIComponent', 'document', 'encodeURI', 'encodeURIComponent', 'escape', 'indexedDB', 'location', 'localStorage', 'open', 'performance', 'prompt', 'screen', 'sessionStorage', 'setInterval', 'setTimeout', 'window', 'Option',

// Module built ins.
'exports', 'module', 'require',

// Common dev flag.
'__DEV__',

// Jest/Jasmine build ins.
'afterEach', 'beforeEach', 'describe', 'expect', 'it', 'jest', 'waitsForPromise', 'jasmine', 'spyOn', 'mockRunTimersOnce']);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1aWx0SW5zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFjQSxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksR0FBRyxDQUFDLENBQ3ZCLE9BQU8sRUFDUCxTQUFTLEVBQ1QsTUFBTSxFQUNOLE9BQU8sRUFDUCxVQUFVLEVBQ1YsVUFBVSxFQUNWLE1BQU0sRUFDTixNQUFNLEVBQ04sUUFBUSxFQUNSLFFBQVEsRUFDUixTQUFTLEVBQ1QsUUFBUSxFQUNSLFFBQVEsRUFDUixRQUFRLEVBRVIsV0FBVyxFQUNYLFFBQVEsRUFDUixVQUFVLEVBQ1YsT0FBTyxFQUNQLFlBQVksRUFDWixVQUFVLEVBQ1YsV0FBVyxFQUNYLFNBQVM7OztBQUdULE9BQU8sRUFDUCxlQUFlLEVBQ2YsY0FBYyxFQUNkLFNBQVMsRUFDVCxXQUFXLEVBQ1gsb0JBQW9CLEVBQ3BCLFVBQVUsRUFDVixXQUFXLEVBQ1gsb0JBQW9CLEVBQ3BCLFFBQVEsRUFDUixXQUFXLEVBQ1gsVUFBVSxFQUNWLGNBQWMsRUFDZCxNQUFNLEVBQ04sYUFBYSxFQUNiLFFBQVEsRUFDUixRQUFRLEVBQ1IsZ0JBQWdCLEVBQ2hCLGFBQWEsRUFDYixZQUFZLEVBQ1osUUFBUSxFQUVSLFFBQVE7OztBQUdSLFNBQVMsRUFDVCxRQUFRLEVBQ1IsU0FBUzs7O0FBR1QsU0FBUzs7O0FBR1QsV0FBVyxFQUNYLFlBQVksRUFDWixVQUFVLEVBQ1YsUUFBUSxFQUNSLElBQUksRUFDSixNQUFNLEVBQ04saUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxPQUFPLEVBQ1AsbUJBQW1CLENBQ3BCLENBQUMsQ0FBQyIsImZpbGUiOiJidWlsdElucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2UgYmFiZWwnO1xuLyogQGZsb3cgKi9cblxuLypcbiAqIENvcHlyaWdodCAoYykgMjAxNS1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBsaWNlbnNlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgaW5cbiAqIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbi8qKlxuICogVGhpcyBpcyB0aGUgc2V0IG9mIG1vZHVsZXMgdGhhdCBhcmUgXCJidWlsdC1pblwiIGFuZCBuZXZlciBuZWVkIHRvIGJlIHJlcXVpcmVkLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBTZXQoW1xuICAnQXJyYXknLFxuICAnQm9vbGVhbicsXG4gICdEYXRlJyxcbiAgJ0Vycm9yJyxcbiAgJ0Z1bmN0aW9uJyxcbiAgJ0luZmluaXR5JyxcbiAgJ0pTT04nLFxuICAnTWF0aCcsXG4gICdOdW1iZXInLFxuICAnT2JqZWN0JyxcbiAgJ1Byb21pc2UnLFxuICAnUmVnRXhwJyxcbiAgJ1N0cmluZycsXG4gICdTeW1ib2wnLFxuXG4gICdhcmd1bWVudHMnLFxuICAnZ2xvYmFsJyxcbiAgJ2lzRmluaXRlJyxcbiAgJ2lzTmFOJyxcbiAgJ3BhcnNlRmxvYXQnLFxuICAncGFyc2VJbnQnLFxuICAndW5kZWZpbmVkJyxcbiAgJ2NvbnNvbGUnLFxuXG4gIC8vIEJyb3dzZXIgYnVpbHQgaW5zLlxuICAnYWxlcnQnLFxuICAnY2xlYXJJbnRlcnZhbCcsXG4gICdjbGVhclRpbWVvdXQnLFxuICAnY29uZmlybScsXG4gICdkZWNvZGVVUkknLFxuICAnZGVjb2RlVVJJQ29tcG9uZW50JyxcbiAgJ2RvY3VtZW50JyxcbiAgJ2VuY29kZVVSSScsXG4gICdlbmNvZGVVUklDb21wb25lbnQnLFxuICAnZXNjYXBlJyxcbiAgJ2luZGV4ZWREQicsXG4gICdsb2NhdGlvbicsXG4gICdsb2NhbFN0b3JhZ2UnLFxuICAnb3BlbicsXG4gICdwZXJmb3JtYW5jZScsXG4gICdwcm9tcHQnLFxuICAnc2NyZWVuJyxcbiAgJ3Nlc3Npb25TdG9yYWdlJyxcbiAgJ3NldEludGVydmFsJyxcbiAgJ3NldFRpbWVvdXQnLFxuICAnd2luZG93JyxcblxuICAnT3B0aW9uJyxcblxuICAvLyBNb2R1bGUgYnVpbHQgaW5zLlxuICAnZXhwb3J0cycsXG4gICdtb2R1bGUnLFxuICAncmVxdWlyZScsXG5cbiAgLy8gQ29tbW9uIGRldiBmbGFnLlxuICAnX19ERVZfXycsXG5cbiAgLy8gSmVzdC9KYXNtaW5lIGJ1aWxkIGlucy5cbiAgJ2FmdGVyRWFjaCcsXG4gICdiZWZvcmVFYWNoJyxcbiAgJ2Rlc2NyaWJlJyxcbiAgJ2V4cGVjdCcsXG4gICdpdCcsXG4gICdqZXN0JyxcbiAgJ3dhaXRzRm9yUHJvbWlzZScsXG4gICdqYXNtaW5lJyxcbiAgJ3NweU9uJyxcbiAgJ21vY2tSdW5UaW1lcnNPbmNlJyxcbl0pO1xuIl19