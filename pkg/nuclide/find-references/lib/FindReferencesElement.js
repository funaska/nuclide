var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _require = require('react-for-atom');

var React = _require.React;
var ReactDOM = _require.ReactDOM;

var FindReferencesView = require('./view/FindReferencesView');

var FindReferencesElement = (function (_HTMLElement) {
  _inherits(FindReferencesElement, _HTMLElement);

  function FindReferencesElement() {
    _classCallCheck(this, FindReferencesElement);

    _get(Object.getPrototypeOf(FindReferencesElement.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(FindReferencesElement, [{
    key: 'initialize',
    value: function initialize(model) {
      this._model = model;
      return this;
    }
  }, {
    key: 'getTitle',
    value: function getTitle() {
      return 'Symbol References: ' + this._model.getSymbolName();
    }
  }, {
    key: 'attachedCallback',
    value: function attachedCallback() {
      ReactDOM.render(React.createElement(FindReferencesView, { model: this._model }), this);
    }
  }, {
    key: 'detachedCallback',
    value: function detachedCallback() {
      ReactDOM.unmountComponentAtNode(this);
    }
  }]);

  return FindReferencesElement;
})(HTMLElement);

module.exports = FindReferencesElement = document.registerElement('nuclide-find-references-view', { prototype: FindReferencesElement.prototype });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZpbmRSZWZlcmVuY2VzRWxlbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O2VBZ0JJLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQzs7SUFGM0IsS0FBSyxZQUFMLEtBQUs7SUFDTCxRQUFRLFlBQVIsUUFBUTs7QUFFVixJQUFNLGtCQUFrQixHQUFHLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQyxDQUFDOztJQUUxRCxxQkFBcUI7WUFBckIscUJBQXFCOztXQUFyQixxQkFBcUI7MEJBQXJCLHFCQUFxQjs7K0JBQXJCLHFCQUFxQjs7O2VBQXJCLHFCQUFxQjs7V0FHZixvQkFBQyxLQUEwQixFQUFFO0FBQ3JDLFVBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0FBQ3BCLGFBQU8sSUFBSSxDQUFDO0tBQ2I7OztXQUVPLG9CQUFHO0FBQ1QsYUFBTyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDO0tBQzVEOzs7V0FFZSw0QkFBRztBQUNqQixjQUFRLENBQUMsTUFBTSxDQUNiLG9CQUFDLGtCQUFrQixJQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxBQUFDLEdBQUcsRUFDMUMsSUFBSSxDQUNMLENBQUM7S0FDSDs7O1dBRWUsNEJBQUc7QUFDakIsY0FBUSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3ZDOzs7U0FyQkcscUJBQXFCO0dBQVMsV0FBVzs7QUF3Qi9DLE1BQU0sQ0FBQyxPQUFPLEdBQUcscUJBQXFCLEdBQUcsQUFBQyxRQUFRLENBQU8sZUFBZSxDQUN0RSw4QkFBOEIsRUFDOUIsRUFBQyxTQUFTLEVBQUUscUJBQXFCLENBQUMsU0FBUyxFQUFDLENBQzdDLENBQUMiLCJmaWxlIjoiRmluZFJlZmVyZW5jZXNFbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBiYWJlbCc7XG4vKiBAZmxvdyAqL1xuXG4vKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIGxpY2Vuc2UgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBpblxuICogdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IHR5cGUgRmluZFJlZmVyZW5jZXNNb2RlbCBmcm9tICcuL0ZpbmRSZWZlcmVuY2VzTW9kZWwnO1xuXG5jb25zdCB7XG4gIFJlYWN0LFxuICBSZWFjdERPTSxcbn0gPSByZXF1aXJlKCdyZWFjdC1mb3ItYXRvbScpO1xuY29uc3QgRmluZFJlZmVyZW5jZXNWaWV3ID0gcmVxdWlyZSgnLi92aWV3L0ZpbmRSZWZlcmVuY2VzVmlldycpO1xuXG5jbGFzcyBGaW5kUmVmZXJlbmNlc0VsZW1lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIF9tb2RlbDogRmluZFJlZmVyZW5jZXNNb2RlbDtcblxuICBpbml0aWFsaXplKG1vZGVsOiBGaW5kUmVmZXJlbmNlc01vZGVsKSB7XG4gICAgdGhpcy5fbW9kZWwgPSBtb2RlbDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldFRpdGxlKCkge1xuICAgIHJldHVybiAnU3ltYm9sIFJlZmVyZW5jZXM6ICcgKyB0aGlzLl9tb2RlbC5nZXRTeW1ib2xOYW1lKCk7XG4gIH1cblxuICBhdHRhY2hlZENhbGxiYWNrKCkge1xuICAgIFJlYWN0RE9NLnJlbmRlcihcbiAgICAgIDxGaW5kUmVmZXJlbmNlc1ZpZXcgbW9kZWw9e3RoaXMuX21vZGVsfSAvPixcbiAgICAgIHRoaXNcbiAgICApO1xuICB9XG5cbiAgZGV0YWNoZWRDYWxsYmFjaygpIHtcbiAgICBSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKHRoaXMpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmluZFJlZmVyZW5jZXNFbGVtZW50ID0gKGRvY3VtZW50OiBhbnkpLnJlZ2lzdGVyRWxlbWVudChcbiAgJ251Y2xpZGUtZmluZC1yZWZlcmVuY2VzLXZpZXcnLFxuICB7cHJvdG90eXBlOiBGaW5kUmVmZXJlbmNlc0VsZW1lbnQucHJvdG90eXBlfVxuKTtcbiJdfQ==