System.register("chunks:///_virtual/ClickMoveBinding.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, MeshRenderer, Tween, Vec3, tween, easing, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      MeshRenderer = module.MeshRenderer;
      Tween = module.Tween;
      Vec3 = module.Vec3;
      tween = module.tween;
      easing = module.easing;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "06269Z0iQNODJORRQsOuBPu", "ClickMoveBinding", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ClickMoveBinding = exports('ClickMoveBinding', (_dec = ccclass('ClickMoveBinding'), _dec2 = property({
        type: Node,
        tooltip: '���� ������� ��� ����� �� ����� �������'
      }), _dec3 = property({
        type: MeshRenderer,
        tooltip: '������ �� MeshRenderer (��������, ��� ������ �����)'
      }), _dec4 = property({
        type: Node,
        tooltip: '���� ������, ������� ����� ������������ �� Y'
      }), _dec5 = property({
        type: Node,
        tooltip: '�������: ���������� ��� ��������, ����������� ��� ��������'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ClickMoveBinding, _Component);
        function ClickMoveBinding() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "target", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "meshRenderer", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "model", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rim", _descriptor4, _assertThisInitialized(_this));
          _this.startPos = null;
          _this.toggled = false;
          return _this;
        }
        var _proto = ClickMoveBinding.prototype;
        _proto.onEnable = function onEnable() {
          if (this.target && !this.startPos) {
            this.startPos = this.target.getPosition().clone();
          }
        };
        _proto.performMove = function performMove(globalDistanceX, globalDuration) {
          if (!this.target) {
            console.warn('[ClickMoveBinding] Target �� �������� ��', this.node.name);
            return;
          }
          if (!this.startPos) {
            this.startPos = this.target.getPosition().clone();
          }
          Tween.stopAllByTarget(this.target);
          var to = this.toggled ? this.startPos.clone() : new Vec3(this.startPos.x + globalDistanceX, this.startPos.y, this.startPos.z);
          this.toggled = !this.toggled;
          tween(this.target).to(globalDuration, {
            position: to
          }, {
            easing: easing.quadOut
          }).start();
        };
        return ClickMoveBinding;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "target", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "meshRenderer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "model", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "rim", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ColorLibrary.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Color, Texture2D, director, MeshRenderer, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Color = module.Color;
      Texture2D = module.Texture2D;
      director = module.director;
      MeshRenderer = module.MeshRenderer;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _class3;
      cclegacy._RF.push({}, "8daf7NAKxNJnqCgflAGm7av", "ColorLibrary", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ColorTextureLibrary = exports('ColorTextureLibrary', (_dec = ccclass('ColorTextureLibrary'), _dec2 = property({
        type: [Color],
        tooltip: 'Палитра цветов'
      }), _dec3 = property({
        type: [Texture2D],
        tooltip: 'Набор текстур'
      }), _dec4 = property({
        tooltip: 'Имя юниформа для цвета #1'
      }), _dec5 = property({
        tooltip: 'Имя юниформа для цвета #2'
      }), _dec6 = property({
        tooltip: 'Имя юниформа для цвета #3'
      }), _dec7 = property({
        tooltip: 'Имя юниформа для цвета #4'
      }), _dec8 = property({
        tooltip: 'Имя юниформа для текстуры #1'
      }), _dec9 = property({
        tooltip: 'Имя юниформа для текстуры #2'
      }), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ColorTextureLibrary, _Component);
        function ColorTextureLibrary() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "paletteColors", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "paletteTextures", _descriptor2, _assertThisInitialized(_this));
          // ----- имена юниформов -----
          _initializerDefineProperty(_this, "colorUniform1", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "colorUniform2", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "colorUniform3", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "colorUniform4", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "textureUniform1", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "textureUniform2", _descriptor8, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = ColorTextureLibrary.prototype;
        _proto.onLoad = function onLoad() {
          if (ColorTextureLibrary._i) {
            this.destroy();
            return;
          }
          ColorTextureLibrary._i = this;
          director.addPersistRootNode(this.node);
        }

        // -------- helpers для уникальных значений --------
        ;

        _proto._pickUniqueIndices = function _pickUniqueIndices(total, count) {
          var n = Math.min(total, count);
          var idxs = Array.from({
            length: total
          }, function (_, i) {
            return i;
          });
          for (var i = idxs.length - 1; i > 0; i--) {
            var j = Math.random() * (i + 1) | 0;
            var _ref = [idxs[j], idxs[i]];
            idxs[i] = _ref[0];
            idxs[j] = _ref[1];
          }
          return idxs.slice(0, n);
        }

        /** Вернёт 4 уникальных цвета */;
        _proto.get4Colors = function get4Colors() {
          var _this2 = this;
          if (!this.paletteColors.length) {
            console.warn('[CTL] палитра цветов пуста');
            return [];
          }
          return this._pickUniqueIndices(this.paletteColors.length, 4).map(function (i) {
            return _this2.paletteColors[i];
          });
        }

        /** Вернёт 2 уникальные текстуры */;
        _proto.get2Textures = function get2Textures() {
          var _this3 = this;
          if (!this.paletteTextures.length) {
            console.warn('[CTL] набор текстур пуст');
            return [];
          }
          return this._pickUniqueIndices(this.paletteTextures.length, 2).map(function (i) {
            return _this3.paletteTextures[i];
          });
        };
        // -------- применение к материалу --------
        /** Установить один цвет в материал по имени юниформа */
        _proto.applyColor = function applyColor(target, color, uniform, matIndex) {
          if (matIndex === void 0) {
            matIndex = 0;
          }
          var mr = target instanceof MeshRenderer ? target : target.getComponent(MeshRenderer);
          if (!mr) return;
          var mat = mr.materials[matIndex];
          if (!mat) return;
          mat.setProperty(uniform, color);
        }

        /** Установить одну текстуру в материал по имени юниформа */;
        _proto.applyTexture = function applyTexture(target, tex, uniform, matIndex) {
          if (matIndex === void 0) {
            matIndex = 0;
          }
          var mr = target instanceof MeshRenderer ? target : target.getComponent(MeshRenderer);
          if (!mr) return;
          var mat = mr.materials[matIndex];
          if (!mat) return;
          mat.setProperty(uniform, tex);
        }

        /** Установить сразу 4 случайных цвета и 2 случайные текстуры в материал */;
        _proto.applyRandomSet = function applyRandomSet(target, matIndex) {
          if (matIndex === void 0) {
            matIndex = 0;
          }
          var mr = target instanceof MeshRenderer ? target : target.getComponent(MeshRenderer);
          if (!mr) return;
          var mat = mr.materials[matIndex];
          if (!mat) return;
          var colors = this.get4Colors();
          var textures = this.get2Textures();
          this.colorUniforms.forEach(function (u, i) {
            if (u && colors[i]) mat.setProperty(u, colors[i]);
          });
          this.textureUniforms.forEach(function (u, i) {
            if (u && textures[i]) mat.setProperty(u, textures[i]);
          });
        };
        _createClass(ColorTextureLibrary, [{
          key: "colorUniforms",
          get: function get() {
            return [this.colorUniform1, this.colorUniform2, this.colorUniform3, this.colorUniform4];
          }
        }, {
          key: "textureUniforms",
          get: function get() {
            return [this.textureUniform1, this.textureUniform2];
          }
        }], [{
          key: "instance",
          get: function get() {
            return this._i;
          }
        }]);
        return ColorTextureLibrary;
      }(Component), _class3._i = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "paletteColors", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "paletteTextures", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "colorUniform1", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'uColor1';
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "colorUniform2", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'uColor2';
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "colorUniform3", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'uColor3';
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "colorUniform4", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'uColor4';
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "textureUniform1", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'uTex1';
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "textureUniform2", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'uTex2';
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FreeCamera.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './VerticalMoveAroundTarget.ts', './InteractionState.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Node, input, Input, clamp, Vec2, Vec3, Component, VerticalMoveAroundTarget, InteractionState;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      input = module.input;
      Input = module.Input;
      clamp = module.clamp;
      Vec2 = module.Vec2;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      VerticalMoveAroundTarget = module.VerticalMoveAroundTarget;
    }, function (module) {
      InteractionState = module.InteractionState;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18;
      cclegacy._RF.push({}, "15f6cp12VhM7IGhUEx42YWM", "FreeCamera", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var VerticalZoomAroundTargetXZ = exports('VerticalZoomAroundTargetXZ', (_dec = ccclass('VerticalZoomAroundTargetXZ'), _dec2 = property({
        type: Node,
        tooltip: 'Таргет: и вертикаль (Y), и точка зума (XZ).'
      }), _dec3 = property({
        tooltip: 'Азимут (yaw) вокруг таргета в градусах. 0° = +Z, 90° = +X.'
      }), _dec4 = property({
        tooltip: 'Стартовая дистанция (по XZ).'
      }), _dec5 = property({
        tooltip: 'Плавность зума (сек). Меньше — резче.'
      }), _dec6 = property({
        tooltip: 'Высота по умолчанию, если нет VerticalMoveAroundTarget.'
      }), _dec7 = property({
        tooltip: 'Шаг зума от колёсика.'
      }), _dec8 = property({
        tooltip: 'Инвертировать колесо: к себе — приближение.'
      }), _dec9 = property({
        tooltip: 'Порог изменения межпальцевого расстояния (px) для старта щипка.'
      }), _dec10 = property({
        tooltip: 'Чувствительность щипка: изменение дистанции на 1 пиксель.'
      }), _dec11 = property({
        tooltip: 'Инвертировать щипок: сводим пальцы — приближение.'
      }), _dec12 = property({
        tooltip: 'Брать базовую высоту из VerticalMoveAroundTarget.startHeight.'
      }), _dec13 = property({
        tooltip: 'Базовая высота (если не берём из VerticalMoveAroundTarget).'
      }), _dec14 = property({
        tooltip: 'MIN дистанция на базовой высоте.'
      }), _dec15 = property({
        tooltip: 'MAX дистанция на базовой высоте.'
      }), _dec16 = property({
        tooltip: 'Насколько меняется MIN на +1 высоты (вверх уменьшает min).'
      }), _dec17 = property({
        tooltip: 'Насколько меняется MAX на +1 высоты (вверх уменьшает max).'
      }), _dec18 = property({
        tooltip: 'Жёсткие пределы, чтобы не улететь в ноль/бесконечность. MIN.'
      }), _dec19 = property({
        tooltip: 'Жёсткие пределы, чтобы не улететь в ноль/бесконечность. MAX.'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(VerticalZoomAroundTargetXZ, _Component);
        function VerticalZoomAroundTargetXZ() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "target", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "yawDeg", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "distance", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "zoomSmoothTime", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "fallbackHeight", _descriptor5, _assertThisInitialized(_this));
          // ===== колесо
          _initializerDefineProperty(_this, "zoomStep", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "invertWheel", _descriptor7, _assertThisInitialized(_this));
          // ===== pinch (тач)
          _initializerDefineProperty(_this, "pinchThresholdPx", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pinchUnitsPerPixel", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "invertPinch", _descriptor10, _assertThisInitialized(_this));
          // ===== ЛИНЕЙНЫЕ ДИНАМИЧЕСКИЕ ГРАНИЦЫ ОТ ВЫСОТЫ =====
          _initializerDefineProperty(_this, "useBaselineFromVertical", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "baselineHeight", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "minDistAtBaseline", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "maxDistAtBaseline", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "minPerHeight", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "maxPerHeight", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "hardMin", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "hardMax", _descriptor18, _assertThisInitialized(_this));
          // ===== внутреннее
          _this.targetDistance = 0;
          _this.currentDistance = 0;
          _this.pendingDeltaDist = 0;
          // pinch state
          _this.pinchId1 = null;
          _this.pinchId2 = null;
          _this.pinchStartGap = 0;
          _this.pinchLastGap = 0;
          _this.pinchAccumPx = 0;
          _this.pinchActive = false;
          _this.pinchClaimed = false;
          // актуальные динамические границы на кадр
          _this.dynMin = 2;
          _this.dynMax = 50;
          return _this;
        }
        var _proto = VerticalZoomAroundTargetXZ.prototype;
        _proto.onEnable = function onEnable() {
          input.on(Input.EventType.MOUSE_WHEEL, this.onMouseWheel, this);
          input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
          input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          input.on(Input.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
        };
        _proto.onDisable = function onDisable() {
          input.off(Input.EventType.MOUSE_WHEEL, this.onMouseWheel, this);
          input.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
          input.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          input.off(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          input.off(Input.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
        };
        _proto.start = function start() {
          if (!this.target) {
            console.error('[VerticalZoomAroundTargetXZ] Target не задан!');
            return;
          }
          // первичная установка лимитов
          this._updateDynamicLimits();
          this.targetDistance = clamp(this.distance, this.dynMin, this.dynMax);
          this.currentDistance = this.targetDistance;
          this.applyTransform();
        }

        // ---------- колесо ----------
        ;

        _proto.onMouseWheel = function onMouseWheel(e) {
          var sign = this.invertWheel ? -1 : 1;
          this.pendingDeltaDist += sign * e.getScrollY() * this.zoomStep * 0.1;
        }

        // ---------- pinch ----------
        ;

        _proto.onTouchStart = function onTouchStart(e) {
          var id = e.getID();
          if (this.pinchId1 === null) this.pinchId1 = id;else if (this.pinchId2 === null && id !== this.pinchId1) {
            this.pinchId2 = id;
            var p1 = this._touchPos(this.pinchId1, e);
            var p2 = this._touchPos(this.pinchId2, e);
            if (p1 && p2) {
              this.pinchStartGap = this._gap(p1, p2);
              this.pinchLastGap = this.pinchStartGap;
              this.pinchAccumPx = 0;
              this.pinchActive = false;
              this.pinchClaimed = false;
            }
          }
        };
        _proto.onTouchMove = function onTouchMove(e) {
          if (this.pinchId1 === null || this.pinchId2 === null) return;
          var p1 = this._touchPos(this.pinchId1, e);
          var p2 = this._touchPos(this.pinchId2, e);
          if (!p1 || !p2) return;
          var gap = this._gap(p1, p2);
          var gapIncPx = gap - this.pinchLastGap;
          var totalPx = gap - this.pinchStartGap;
          this.pinchLastGap = gap;
          if (!this.pinchActive) {
            this.pinchAccumPx += gapIncPx;
            if (Math.abs(totalPx) >= this.pinchThresholdPx) {
              this.pinchActive = true;
              if (!InteractionState.inGesture) {
                InteractionState.beginGesture(this.pinchId1, 'touch');
                this.pinchClaimed = true;
              }
              InteractionState.markDrag(this.pinchId1);
            } else {
              return;
            }
          }
          if (gapIncPx !== 0) {
            var sign = this.invertPinch ? -1 : 1;
            this.pendingDeltaDist += gapIncPx * this.pinchUnitsPerPixel * sign;
          }
        };
        _proto.onTouchEnd = function onTouchEnd(e) {
          var id = e.getID();
          if (id === this.pinchId1 || id === this.pinchId2) {
            if (this.pinchClaimed) InteractionState.tryEndGesture(this.pinchId1, 'touch');
            this._resetPinch();
          }
        };
        _proto.onTouchCancel = function onTouchCancel(e) {
          var id = e.getID();
          if (id === this.pinchId1 || id === this.pinchId2) {
            if (this.pinchClaimed) InteractionState.tryEndGesture(this.pinchId1, 'touch');
            this._resetPinch();
          }
        };
        _proto._resetPinch = function _resetPinch() {
          this.pinchId1 = this.pinchId2 = null;
          this.pinchStartGap = this.pinchLastGap = 0;
          this.pinchAccumPx = 0;
          this.pinchActive = false;
          this.pinchClaimed = false;
        };
        _proto._touchPos = function _touchPos(id, evt) {
          var all = evt.getAllTouches == null ? void 0 : evt.getAllTouches();
          if (all && all.length > 0) {
            for (var _iterator = _createForOfIteratorHelperLoose(all), _step; !(_step = _iterator()).done;) {
              var t = _step.value;
              if (t.getID() === id) return new Vec2(t.getLocationX(), t.getLocationY());
            }
            return null;
          }
          if (evt.getID() === id) return new Vec2(evt.getLocationX(), evt.getLocationY());
          return null;
        };
        _proto._gap = function _gap(a, b) {
          var dx = a.x - b.x,
            dy = a.y - b.y;
          return Math.sqrt(dx * dx + dy * dy);
        }

        // ---------- динамические лимиты: linear от базовой высоты ----------
        ;

        _proto._getOffsetY = function _getOffsetY() {
          var vm = this.getComponent(VerticalMoveAroundTarget);
          return vm ? vm.offsetY : this.fallbackHeight;
        };
        _proto._getBaseline = function _getBaseline() {
          if (this.useBaselineFromVertical) {
            var vm = this.getComponent(VerticalMoveAroundTarget);
            if (vm && typeof vm.startHeight === 'number') return vm.startHeight;
          }
          return this.baselineHeight;
        }

        /** Считает dynMin/dynMax линейно от (offsetY - baseline).
         *  Выше базы -> границы уменьшаются; ниже -> увеличиваются.
         */;
        _proto._updateDynamicLimits = function _updateDynamicLimits() {
          var h = this._getOffsetY();
          var h0 = this._getBaseline();
          var dh = h - h0; // +вверх, -вниз

          // min/max на текущей высоте:
          var minDyn = this.minDistAtBaseline - this.minPerHeight * dh;
          var maxDyn = this.maxDistAtBaseline - this.maxPerHeight * dh;

          // жёсткие пределы и корректность
          minDyn = clamp(minDyn, this.hardMin, this.hardMax);
          maxDyn = clamp(maxDyn, this.hardMin, this.hardMax);
          if (maxDyn < minDyn) {
            var mid = 0.5 * (minDyn + maxDyn);
            minDyn = mid - 0.001;
            maxDyn = mid + 0.001;
          }
          this.dynMin = minDyn;
          this.dynMax = maxDyn;
        }

        // ---------- апдейт ----------
        ;

        _proto.update = function update(dt) {
          if (!this.target) return;

          // 1) обновим линейные динамические лимиты от высоты
          this._updateDynamicLimits();

          // 2) применим накопленное изменение дистанции (колесо/щипок)
          if (this.pendingDeltaDist !== 0) {
            this.targetDistance += this.pendingDeltaDist;
            this.pendingDeltaDist = 0;
          }

          // 3) клампим таргет по динамическим лимитам
          this.targetDistance = clamp(this.targetDistance, this.dynMin, this.dynMax);

          // 4) плавно тянем current к target
          var k = this.zoomSmoothTime > 0 ? 1 - Math.exp(-dt / this.zoomSmoothTime) : 1;
          this.currentDistance += (this.targetDistance - this.currentDistance) * k;

          // защитный кламп current (если лимиты сдвинулись резко из-за изменения высоты)
          this.currentDistance = clamp(this.currentDistance, this.dynMin, this.dynMax);
          this.applyTransform();
        };
        _proto.applyTransform = function applyTransform() {
          var tgt = this.target.worldPosition;
          var offsetY = this._getOffsetY(); // текущая высота камеры от VerticalMoveAroundTarget

          var yaw = this.yawDeg * Math.PI / 180;
          var offX = Math.sin(yaw) * this.currentDistance;
          var offZ = Math.cos(yaw) * this.currentDistance;
          var camPos = new Vec3(tgt.x + offX, tgt.y + offsetY, tgt.z + offZ);
          this.node.setWorldPosition(camPos);
          this.node.lookAt(new Vec3(tgt.x, camPos.y, tgt.z));
        };
        return VerticalZoomAroundTargetXZ;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "target", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "yawDeg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "distance", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "zoomSmoothTime", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.15;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "fallbackHeight", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "zoomStep", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "invertWheel", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "pinchThresholdPx", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 12;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "pinchUnitsPerPixel", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.02;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "invertPinch", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "useBaselineFromVertical", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "baselineHeight", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "minDistAtBaseline", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 6;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "maxDistAtBaseline", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 60;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "minPerHeight", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.6;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "maxPerHeight", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.2;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "hardMin", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.25;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "hardMax", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1000;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GlobalClickManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ClickMoveBinding.ts', './InteractionState.ts', './PointerIds.ts', './RotateYByKeys.ts', './VerticalMoveAroundTarget.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Camera, Node, input, Input, tween, Vec3, Component, PhysicsSystem, geometry, ClickMoveBinding, InteractionState, MOUSE_ID, RotateYByKeys, VerticalMoveAroundTarget;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Camera = module.Camera;
      Node = module.Node;
      input = module.input;
      Input = module.Input;
      tween = module.tween;
      Vec3 = module.Vec3;
      Component = module.Component;
      PhysicsSystem = module.PhysicsSystem;
      geometry = module.geometry;
    }, function (module) {
      ClickMoveBinding = module.ClickMoveBinding;
    }, function (module) {
      InteractionState = module.InteractionState;
    }, function (module) {
      MOUSE_ID = module.MOUSE_ID;
    }, function (module) {
      RotateYByKeys = module.RotateYByKeys;
    }, function (module) {
      VerticalMoveAroundTarget = module.VerticalMoveAroundTarget;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20;
      cclegacy._RF.push({}, "4bd86blOoRLpq75wEwnh3v5", "GlobalClickManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      // === helpers ===
      function yawFromVecXZ(v) {
        return Math.atan2(v.x, v.z) * 180 / Math.PI;
      }
      function shortestAngleDeg(delta) {
        return (delta + 540) % 360 - 180;
      }
      var State = /*#__PURE__*/function (State) {
        State["Idle"] = "Idle";
        State["Aligning"] = "Aligning";
        State["SlideOut"] = "SlideOut";
        State["RotateModelOpen"] = "RotateModelOpen";
        State["LockedOut"] = "LockedOut";
        State["RotateModelClose"] = "RotateModelClose";
        State["SlideIn"] = "SlideIn";
        return State;
      }(State || {});
      var GlobalClickManager3D = exports('GlobalClickManager3D', (_dec = ccclass('GlobalClickManager3D'), _dec2 = property({
        type: Camera,
        tooltip: 'Камера сцены для рейкастов.'
      }), _dec3 = property({
        type: Node,
        tooltip: 'Корень башни (торта), который вращаем вокруг Y.'
      }), _dec4 = property({
        type: RotateYByKeys,
        tooltip: 'Скрипт ручного поворота башни.'
      }), _dec5 = property({
        type: VerticalMoveAroundTarget,
        tooltip: 'Вертикальный контроллер камеры.'
      }), _dec6 = property({
        tooltip: 'Лицевая ось кусочка: true — использовать -X вместо +X.'
      }), _dec7 = property({
        tooltip: 'Длительность автоповорота башни (сек).'
      }), _dec8 = property({
        tooltip: 'Длительность вертикального перехода (сек).'
      }), _dec9 = property({
        tooltip: 'Длительность движения кусочка (сек).'
      }), _dec10 = property({
        tooltip: 'Доп. сдвиг по Y над центром куска (ед.).'
      }), _dec11 = property({
        tooltip: 'БАЗОВОЕ расстояние выезда (со знаком). Реальное масштабируется.'
      }), _dec12 = property({
        tooltip: 'От какой оси масштаба зависеть: X/Y/Z'
      }), _dec13 = property({
        tooltip: 'Влияние масштаба: 1=полное (×scaleAxis), 0.5=частичное, 0=выкл.'
      }), _dec14 = property({
        tooltip: 'Мин. модуль выезда после масштаба. 0 — без минимума.'
      }), _dec15 = property({
        tooltip: 'Макс. модуль выезда после масштаба. 0 — без потолка.'
      }), _dec16 = property({
        tooltip: 'Имя дочерней ноды МОДЕЛИ относительно кусочка (пусто = сам кусочек).'
      }), _dec17 = property({
        tooltip: 'Имя дочерней ноды БОРТИКА относительно кусочка (необязательно).'
      }), _dec18 = property({
        tooltip: 'Угол модели по Y при ОТКРЫТИИ (градусы).'
      }), _dec19 = property({
        tooltip: 'Угол модели по Y при ЗАКРЫТИИ (градусы).'
      }), _dec20 = property({
        tooltip: 'Длительность поворота МОДЕЛИ (сек).'
      }), _dec21 = property({
        tooltip: 'Easing поворота модели.'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GlobalClickManager3D, _Component);
        function GlobalClickManager3D() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          // ------------------------------------------------------------
          // [References]
          // ------------------------------------------------------------
          _initializerDefineProperty(_this, "sceneCamera", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rotatingRoot", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rotator", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "vertical", _descriptor4, _assertThisInitialized(_this));
          // ------------------------------------------------------------
          // [Piece facing]
          // ------------------------------------------------------------
          _initializerDefineProperty(_this, "invertPieceAxis", _descriptor5, _assertThisInitialized(_this));
          // ------------------------------------------------------------
          // [Timings]
          // ------------------------------------------------------------
          _initializerDefineProperty(_this, "rotateDuration", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "verticalDuration", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "slideDuration", _descriptor8, _assertThisInitialized(_this));
          // ------------------------------------------------------------
          // [Vertical offset]
          // ------------------------------------------------------------
          _initializerDefineProperty(_this, "verticalExtraOffset", _descriptor9, _assertThisInitialized(_this));
          // ------------------------------------------------------------
          // [Slide distance (base) + scale influence]
          // ------------------------------------------------------------
          _initializerDefineProperty(_this, "baseSlideDistance", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scaleAxis", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scaleInfluence", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "minAbsDistance", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "maxAbsDistance", _descriptor14, _assertThisInitialized(_this));
          // ------------------------------------------------------------
          // [Model & Rim control (per piece)]
          // ------------------------------------------------------------
          _initializerDefineProperty(_this, "modelChildName", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rimChildName", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "openYawDeg", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "closeYawDeg", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "modelRotateDuration", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "modelRotateEasing", _descriptor20, _assertThisInitialized(_this));
          // ------------------------------------------------------------
          // [State]
          // ------------------------------------------------------------
          _this.fsm = State.Idle;
          _this.currentPiece = null;
          _this.currentBinding = null;
          _this.lastDistanceUsed = 0;
          _this._lastScaleUsed = 1;
          // для логов
          // кеш текущих ссылок на модель/бортик
          _this.currentModel = null;
          _this.currentRim = null;
          return _this;
        }
        var _proto = GlobalClickManager3D.prototype;
        // ------------------------------------------------------------
        // [Input wiring]
        // ------------------------------------------------------------
        _proto.onEnable = function onEnable() {
          input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          input.on(Input.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
          input.on(Input.EventType.MOUSE_UP, this.onMouseUp, this);
        };
        _proto.onDisable = function onDisable() {
          input.off(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          input.off(Input.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
          input.off(Input.EventType.MOUSE_UP, this.onMouseUp, this);
        }

        // ------------------------------------------------------------
        // [Input handlers]
        // ------------------------------------------------------------
        ;

        _proto.onTouchEnd = function onTouchEnd(e) {
          if (!this.sceneCamera) return;
          if (this.fsm === State.LockedOut) {
            void this.slideInAndUnlock();
            return;
          }
          if (this.fsm !== State.Idle) return;
          if (InteractionState.inGesture && InteractionState.source === 'mouse') return;
          var _InteractionState$try = InteractionState.tryEndGesture(e.getID(), 'touch'),
            ended = _InteractionState$try.ended,
            wasDragged = _InteractionState$try.wasDragged;
          if (!ended || wasDragged) return;
          var p = e.getLocation();
          void this.onClick(p.x, p.y);
        };
        _proto.onTouchCancel = function onTouchCancel(e) {
          InteractionState.tryEndGesture(e.getID(), 'touch');
        };
        _proto.onMouseUp = function onMouseUp(e) {
          if (!this.sceneCamera || e.getButton() !== 0) return;
          if (this.fsm === State.LockedOut) {
            void this.slideInAndUnlock();
            return;
          }
          if (this.fsm !== State.Idle) return;
          if (InteractionState.inGesture && InteractionState.source === 'touch') return;
          var res = InteractionState.tryEndGesture(MOUSE_ID, 'mouse');
          var wasDrag = res.wasDragged || InteractionState.consumeRecentDrag();
          if (wasDrag) return;
          var p = e.getLocation();
          void this.onClick(p.x, p.y);
        }

        // ------------------------------------------------------------
        // [Click flow: Align (parallel) → RimOn+SlideOut → RotateModelOpen → LockedOut]
        // ------------------------------------------------------------
        ;

        _proto.onClick = /*#__PURE__*/
        function () {
          var _onClick = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(x, y) {
            var ray, hit, n, binding, rotateP, verticalP, dynDist;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!(!this.sceneCamera || !this.rotatingRoot)) {
                    _context.next = 2;
                    break;
                  }
                  return _context.abrupt("return");
                case 2:
                  // рейкаст
                  ray = new geometry.Ray();
                  this.sceneCamera.screenPointToRay(x, y, ray);
                  if (PhysicsSystem.instance.raycastClosest(ray)) {
                    _context.next = 6;
                    break;
                  }
                  return _context.abrupt("return");
                case 6:
                  // ищем ClickMoveBinding вверх по иерархии
                  hit = PhysicsSystem.instance.raycastClosestResult;
                  n = hit.collider.node;
                  binding = null;
                  while (n && !binding) {
                    binding = n.getComponent(ClickMoveBinding) || null;
                    if (!binding) n = n.parent;
                  }
                  if (!(!binding || !n)) {
                    _context.next = 12;
                    break;
                  }
                  return _context.abrupt("return");
                case 12:
                  if (!(this.fsm !== State.Idle)) {
                    _context.next = 14;
                    break;
                  }
                  return _context.abrupt("return");
                case 14:
                  this.currentPiece = n;
                  this.currentBinding = binding;

                  // cache model/rim для этого куска
                  this.currentModel = binding.model || n; // если вдруг null, fallback = сам кусок
                  this.currentRim = binding.rim || null;
                  // rim по умолчанию OFF
                  if (this.currentRim) this.currentRim.active = false;

                  // блокируем ручное управление до конца цикла
                  this.lockControls();

                  // === 1) Aligning (поворот башни + вертикаль) ===
                  this.fsm = State.Aligning;
                  rotateP = this.rotateTowerToFaceCamera(n);
                  verticalP = Promise.resolve();
                  if (this.vertical && this.vertical.target) {
                    this.vertical.stopInertia();
                    verticalP = this.vertical.moveToNode(n, this.verticalDuration, this.verticalExtraOffset);
                  }
                  _context.next = 26;
                  return Promise.all([rotateP, verticalP]);
                case 26:
                  // === 2) RimOn + SlideOut ===
                  this.fsm = State.SlideOut;
                  if (this.currentRim) this.currentRim.active = true;
                  dynDist = this.computeDistanceForPiece(n, this.baseSlideDistance);
                  this.lastDistanceUsed = dynDist;
                  this.currentBinding.performMove(dynDist, this.slideDuration);
                  _context.next = 33;
                  return this.delayByTween(this.node, this.slideDuration);
                case 33:
                  // === 3) RotateModelOpen ===
                  this.fsm = State.RotateModelOpen;
                  if (!this.currentModel) {
                    _context.next = 37;
                    break;
                  }
                  _context.next = 37;
                  return this.rotateModelTo(this.currentModel, this.openYawDeg, this.modelRotateDuration, this.modelRotateEasing);
                case 37:
                  // === 4) LockedOut ===
                  this.fsm = State.LockedOut;
                case 38:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function onClick(_x, _x2) {
            return _onClick.apply(this, arguments);
          }
          return onClick;
        }() // ------------------------------------------------------------
        // [SlideIn flow: RotateModelClose → SlideIn + RimOff → Idle]
        // ------------------------------------------------------------
        ;

        _proto.slideInAndUnlock = /*#__PURE__*/
        function () {
          var _slideInAndUnlock = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(this.fsm !== State.LockedOut)) {
                    _context2.next = 2;
                    break;
                  }
                  return _context2.abrupt("return");
                case 2:
                  if (this.currentBinding) {
                    _context2.next = 6;
                    break;
                  }
                  this.unlockControls();
                  this.resetCycle();
                  return _context2.abrupt("return");
                case 6:
                  // 1) Rotate model back
                  this.fsm = State.RotateModelClose;
                  if (!this.currentModel) {
                    _context2.next = 10;
                    break;
                  }
                  _context2.next = 10;
                  return this.rotateModelTo(this.currentModel, this.closeYawDeg, this.modelRotateDuration, this.modelRotateEasing);
                case 10:
                  // 2) SlideIn
                  this.fsm = State.SlideIn;
                  this.currentBinding.performMove(this.lastDistanceUsed, this.slideDuration);
                  _context2.next = 14;
                  return this.delayByTween(this.node, this.slideDuration);
                case 14:
                  // 3) RimOff
                  if (this.currentRim) this.currentRim.active = false;

                  // done
                  this.unlockControls();
                  this.resetCycle();
                  this.fsm = State.Idle;
                case 18:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function slideInAndUnlock() {
            return _slideInAndUnlock.apply(this, arguments);
          }
          return slideInAndUnlock;
        }();
        _proto.resetCycle = function resetCycle() {
          this.currentPiece = null;
          this.currentBinding = null;
          this.currentModel = null;
          this.currentRim = null;
          this.lastDistanceUsed = 0;
        }

        // ------------------------------------------------------------
        // [Lock / Unlock manual controls (без модификации скриптов)]
        // ------------------------------------------------------------
        ;

        _proto.lockControls = function lockControls() {
          var _this$rotator, _this$vertical;
          (_this$rotator = this.rotator) == null || _this$rotator.stopInertia();
          if (this.rotator) this.rotator.enabled = false;
          (_this$vertical = this.vertical) == null || _this$vertical.stopInertia();
          if (this.vertical) this.vertical.enabled = false;
          InteractionState.hardReset == null || InteractionState.hardReset();
        };
        _proto.unlockControls = function unlockControls() {
          if (this.rotator) this.rotator.enabled = true;
          if (this.vertical) this.vertical.enabled = true;
          InteractionState.hardReset == null || InteractionState.hardReset();
        }

        // ------------------------------------------------------------
        // [Distance calc with scale (robust)]
        // ------------------------------------------------------------
        ;

        _proto.computeDistanceForPiece = function computeDistanceForPiece(pieceNode, baseDistance) {
          var sign = baseDistance >= 0 ? 1 : -1;
          var baseAbs = Math.abs(baseDistance);
          var ws = pieceNode.worldScale;
          var sAxis = this.scaleAxis === 'X' ? Math.abs(ws.x) : this.scaleAxis === 'Y' ? Math.abs(ws.y) : Math.abs(ws.z);
          if (sAxis < 1e-4) sAxis = Math.max(Math.abs(ws.x), Math.abs(ws.y), Math.abs(ws.z));
          var inf = Math.max(0, this.scaleInfluence);
          var scaledAbs = inf >= 0.999 ? baseAbs * sAxis : baseAbs * (1 + inf * (sAxis - 1));
          if (this.minAbsDistance > 0) scaledAbs = Math.max(scaledAbs, this.minAbsDistance);
          if (this.maxAbsDistance > 0) scaledAbs = Math.min(scaledAbs, this.maxAbsDistance);
          if (scaledAbs < 1e-4) scaledAbs = baseAbs; // страховка: не даём 0

          this._lastScaleUsed = sAxis;
          return scaledAbs * sign;
        }

        // ------------------------------------------------------------
        // [Rotate model tween]
        // ------------------------------------------------------------
        ;

        _proto.rotateModelTo = function rotateModelTo(model, targetYawDeg, duration, easingName) {
          return new Promise(function (resolve) {
            var e = model.eulerAngles;
            var startY = e.y;
            var endY = targetYawDeg;
            if (Math.abs(endY - startY) < 0.01 || duration <= 0) {
              model.setRotationFromEuler(e.x, endY, e.z);
              resolve();
              return;
            }
            var driver = {
              t: 0
            };
            tween(driver).to(duration, {
              t: 1
            }, {
              easing: easingName,
              onUpdate: function onUpdate() {
                var y = startY + (endY - startY) * driver.t;
                model.setRotationFromEuler(e.x, y, e.z);
              }
            }).call(function () {
              return resolve();
            }).start();
          });
        }

        // ------------------------------------------------------------
        // [Auto-rotate tower to face camera]
        // ------------------------------------------------------------
        ;

        _proto.rotateTowerToFaceCamera = function rotateTowerToFaceCamera(chunkNode) {
          var _this2 = this;
          return new Promise(function (resolve) {
            var _this2$rotator;
            if (!_this2.rotatingRoot || !_this2.sceneCamera) {
              resolve();
              return;
            }
            var root = _this2.rotatingRoot;

            // лицевая ось куска в мире
            var baseLocal = _this2.invertPieceAxis ? new Vec3(-1, 0, 0) : new Vec3(1, 0, 0);
            var worldRot = chunkNode.worldRotation;
            var outwardWorld = new Vec3();
            Vec3.transformQuat(outwardWorld, baseLocal, worldRot);
            outwardWorld.y = 0;
            if (outwardWorld.length() < 1e-4) {
              Vec3.transformQuat(outwardWorld, new Vec3(0, 0, -1), worldRot);
              outwardWorld.y = 0;
              if (outwardWorld.length() < 1e-4) {
                resolve();
                return;
              }
            }
            outwardWorld.normalize();
            var pieceYaw = yawFromVecXZ(outwardWorld);

            // направление на камеру (от корня)
            var rootPos = root.worldPosition;
            var camPos = _this2.sceneCamera.node.worldPosition;
            var toCam = new Vec3(camPos.x - rootPos.x, 0, camPos.z - rootPos.z);
            if (toCam.length() < 1e-4) {
              resolve();
              return;
            }
            toCam.normalize();
            var camYaw = yawFromVecXZ(toCam);

            // твин по кратчайшему пути
            var deltaYawDeg = shortestAngleDeg(camYaw - pieceYaw);
            if (Math.abs(deltaYawDeg) < 0.1 || _this2.rotateDuration <= 0) {
              resolve();
              return;
            }
            (_this2$rotator = _this2.rotator) == null || _this2$rotator.stopInertia();
            var startEuler = root.eulerAngles;
            var startYaw = startEuler.y;
            var endYaw = startYaw + deltaYawDeg;
            var tmp = {
              t: 0
            };
            tween(tmp).to(_this2.rotateDuration, {
              t: 1
            }, {
              easing: 'quadOut',
              onUpdate: function onUpdate() {
                var y = startYaw + (endYaw - startYaw) * tmp.t;
                root.setRotationFromEuler(startEuler.x, y, startEuler.z);
              }
            }).call(function () {
              return resolve();
            }).start();
          });
        }

        // ------------------------------------------------------------
        // [Tween delay helper]
        // ------------------------------------------------------------
        ;

        _proto.delayByTween = function delayByTween(target, seconds) {
          return new Promise(function (resolve) {
            tween(target).delay(seconds).call(function () {
              return resolve();
            }).start();
          });
        }

        // === [PUBLIC] Открыть конкретный кусок без клика ===
        ;

        _proto.openPieceDirect = /*#__PURE__*/
        function () {
          var _openPieceDirect = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(piece) {
            var n, binding, rotateP, verticalP, dynDist;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  if (!(this.fsm !== State.Idle)) {
                    _context3.next = 2;
                    break;
                  }
                  return _context3.abrupt("return", false);
                case 2:
                  if (piece) {
                    _context3.next = 4;
                    break;
                  }
                  return _context3.abrupt("return", false);
                case 4:
                  // найти ClickMoveBinding вверх по иерархии
                  n = piece;
                  binding = null;
                  while (n && !binding) {
                    binding = n.getComponent(ClickMoveBinding) || null;
                    if (!binding) n = n.parent;
                  }
                  if (!(!binding || !n)) {
                    _context3.next = 9;
                    break;
                  }
                  return _context3.abrupt("return", false);
                case 9:
                  this.currentPiece = n;
                  this.currentBinding = binding;

                  // cache model/rim
                  this.currentModel = binding.model || n;
                  this.currentRim = binding.rim || null;
                  if (this.currentRim) this.currentRim.active = false;
                  this.lockControls();

                  // 1) Align
                  this.fsm = State.Aligning;
                  rotateP = this.rotateTowerToFaceCamera(n);
                  verticalP = Promise.resolve();
                  if (this.vertical && this.vertical.target) {
                    this.vertical.stopInertia();
                    verticalP = this.vertical.moveToNode(n, this.verticalDuration, this.verticalExtraOffset);
                  }
                  _context3.next = 21;
                  return Promise.all([rotateP, verticalP]);
                case 21:
                  // 2) RimOn + SlideOut
                  this.fsm = State.SlideOut;
                  if (this.currentRim) this.currentRim.active = true;
                  dynDist = this.computeDistanceForPiece(n, this.baseSlideDistance);
                  this.lastDistanceUsed = dynDist;
                  this.currentBinding.performMove(dynDist, this.slideDuration);
                  _context3.next = 28;
                  return this.delayByTween(this.node, this.slideDuration);
                case 28:
                  // 3) RotateModelOpen
                  this.fsm = State.RotateModelOpen;
                  if (!this.currentModel) {
                    _context3.next = 32;
                    break;
                  }
                  _context3.next = 32;
                  return this.rotateModelTo(this.currentModel, this.openYawDeg, this.modelRotateDuration, this.modelRotateEasing);
                case 32:
                  // 4) LockedOut
                  this.fsm = State.LockedOut;
                  return _context3.abrupt("return", true);
                case 34:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function openPieceDirect(_x3) {
            return _openPieceDirect.apply(this, arguments);
          }
          return openPieceDirect;
        }() // === [PUBLIC] Закрыть если выдвинуто → выбрать случайный кусок из root → открыть ===
        ;

        _proto.toggleOrOpenRandom = /*#__PURE__*/
        function () {
          var _toggleOrOpenRandom = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(root) {
            var candidates, pick;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  if (root) {
                    _context4.next = 2;
                    break;
                  }
                  return _context4.abrupt("return", false);
                case 2:
                  if (!(this.fsm === State.LockedOut)) {
                    _context4.next = 5;
                    break;
                  }
                  _context4.next = 5;
                  return this.slideInAndUnlock();
                case 5:
                  if (!(this.fsm !== State.Idle)) {
                    _context4.next = 7;
                    break;
                  }
                  return _context4.abrupt("return", false);
                case 7:
                  // собрать кандидатов (дети с ClickMoveBinding, активные)
                  candidates = root.children.filter(function (c) {
                    if (!c.activeInHierarchy) return false;
                    // не выбираем вспомогательные ноды, у которых нет биндинга
                    return !!(c.getComponent(ClickMoveBinding) ||
                    // допускаем, что биндинг может быть глубже
                    c.getComponentsInChildren(ClickMoveBinding).length > 0);
                  });
                  if (!(candidates.length === 0)) {
                    _context4.next = 10;
                    break;
                  }
                  return _context4.abrupt("return", false);
                case 10:
                  pick = candidates[Math.floor(Math.random() * candidates.length)];
                  return _context4.abrupt("return", this.openPieceDirect(pick));
                case 12:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));
          function toggleOrOpenRandom(_x4) {
            return _toggleOrOpenRandom.apply(this, arguments);
          }
          return toggleOrOpenRandom;
        }();
        _proto.toggleOrOpen = /*#__PURE__*/function () {
          var _toggleOrOpen = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(root) {
            var candidates, pick;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  if (root) {
                    _context5.next = 2;
                    break;
                  }
                  return _context5.abrupt("return", false);
                case 2:
                  if (!(this.fsm === State.LockedOut)) {
                    _context5.next = 5;
                    break;
                  }
                  _context5.next = 5;
                  return this.slideInAndUnlock();
                case 5:
                  if (!(this.fsm !== State.Idle)) {
                    _context5.next = 7;
                    break;
                  }
                  return _context5.abrupt("return", false);
                case 7:
                  // собрать кандидатов (дети с ClickMoveBinding, активные)
                  candidates = root.children.filter(function (c) {
                    if (!c.activeInHierarchy) return false;
                    // не выбираем вспомогательные ноды, у которых нет биндинга
                    return !!(c.getComponent(ClickMoveBinding) ||
                    // допускаем, что биндинг может быть глубже
                    c.getComponentsInChildren(ClickMoveBinding).length > 0);
                  });
                  if (!(candidates.length === 0)) {
                    _context5.next = 10;
                    break;
                  }
                  return _context5.abrupt("return", false);
                case 10:
                  pick = candidates[2];
                  return _context5.abrupt("return", this.openPieceDirect(pick));
                case 12:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this);
          }));
          function toggleOrOpen(_x5) {
            return _toggleOrOpen.apply(this, arguments);
          }
          return toggleOrOpen;
        }();
        return GlobalClickManager3D;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sceneCamera", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "rotatingRoot", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "rotator", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "vertical", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "invertPieceAxis", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "rotateDuration", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.35;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "verticalDuration", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.35;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "slideDuration", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.25;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "verticalExtraOffset", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.0;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "baseSlideDistance", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "scaleAxis", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'Y';
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "scaleInfluence", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.0;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "minAbsDistance", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.0;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "maxAbsDistance", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.0;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "modelChildName", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "rimChildName", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "openYawDeg", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 90;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "closeYawDeg", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "modelRotateDuration", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.25;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "modelRotateEasing", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'quadOut';
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/InteractionState.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "85bc8piAeJIyrMBDWo80N4k", "InteractionState", undefined);
      var InteractionState = exports('InteractionState', /*#__PURE__*/function () {
        function InteractionState() {}
        /** Подсмотреть, был ли недавно drag (без поглощения флага) */
        InteractionState.peekRecentDrag = function peekRecentDrag(windowMs) {
          if (windowMs === void 0) {
            windowMs = InteractionState.DRAG_LATCH_MS;
          }
          if (!this.lastEndWasDragged) return false;
          return Date.now() - this.lastEndAtMs <= windowMs;
        }
        /** Узнать и поглотить флаг "недавний drag", чтобы следующий обработчик его не увидел */;
        InteractionState.consumeRecentDrag = function consumeRecentDrag(windowMs) {
          if (windowMs === void 0) {
            windowMs = InteractionState.DRAG_LATCH_MS;
          }
          var ok = this.peekRecentDrag(windowMs);
          if (ok) {
            this.lastEndWasDragged = false;
            this.lastEndAtMs = 0;
          }
          return ok;
        };
        InteractionState.beginGesture = function beginGesture(id, source) {
          if (this.inGesture) return; // уже кто-то ведёт жест — игнор
          this.inGesture = true;
          this.ended = false; // жест начался
          this.activeId = id;
          this.source = source;
          this.draggedInGesture = false;
          this.isRotating = false;
          // сбрасываем latch при старте нового жеста
          this.lastEndWasDragged = false;
          this.lastEndAtMs = 0;
        };
        InteractionState.markDrag = function markDrag(id) {
          if (!this.inGesture || this.ended) return;
          if (this.activeId !== id) return;
          this.draggedInGesture = true;
          this.isRotating = true;
        }

        /**
         * Идемпотентное завершение жеста:
         * - Если жеста уже нет, возвращаем ended:true и пробрасываем wasDragged по "лячу" недавнего драга.
         * - Если это наш жест — завершаем строго и лочим флаг "недавний drag" на DRAG_LATCH_MS.
         * - Если частично совпало (id или source) — мягко завершаем (лечит рассинхроны).
         */;
        InteractionState.tryEndGesture = function tryEndGesture(id, source) {
          // 0) Жеста нет — сообщаем "уже завершено", но учитываем недавний drag
          if (!this.inGesture) {
            return {
              ended: true,
              wasDragged: this.peekRecentDrag()
            };
          }

          // 1) Строгое совпадение: наш id и наш source
          if (this.activeId === id && this.source === source) {
            var wasDragged = this.draggedInGesture;
            this._finalizeWithLatch(wasDragged);
            return {
              ended: true,
              wasDragged: wasDragged
            };
          }

          // 2) Мягкое завершение при частичном совпадении (на случай рассинхрона)
          if (this.source === source || this.activeId === id) {
            var _wasDragged = this.draggedInGesture;
            this._finalizeWithLatch(_wasDragged);
            return {
              ended: true,
              wasDragged: _wasDragged
            };
          }

          // 3) Совсем чужой вызов — игнор
          return {
            ended: false,
            wasDragged: false
          };
        }

        /** Жёсткий сброс до покоя (зови при старте сцены/компонента) */;
        InteractionState.hardReset = function hardReset() {
          this.inGesture = false;
          this.activeId = null;
          this.source = null;
          this.draggedInGesture = false;
          this.isRotating = false;
          this.ended = true;
          // сбросим latch тоже
          this.lastEndWasDragged = false;
          this.lastEndAtMs = 0;
        };
        InteractionState._finalizeWithLatch = function _finalizeWithLatch(wasDragged) {
          this.inGesture = false;
          this.ended = true;
          this.activeId = null;
          this.source = null;
          this.draggedInGesture = false;
          this.isRotating = false;

          // зафиксируем "недавний drag" для обработчиков, которые сработают следом
          this.lastEndWasDragged = !!wasDragged;
          this.lastEndAtMs = Date.now();
        };
        return InteractionState;
      }());
      InteractionState.inGesture = false;
      InteractionState.activeId = null;
      InteractionState.source = null;
      InteractionState.draggedInGesture = false;
      InteractionState.isRotating = false;
      // Состояние покоя по умолчанию
      InteractionState.ended = true;
      // === Latch: "недавно был drag" (для гонок между end и обработкой клика)
      InteractionState.lastEndWasDragged = false;
      InteractionState.lastEndAtMs = 0;
      /** Сколько времени считаем событие "недавним" */
      InteractionState.DRAG_LATCH_MS = 160;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./PlaneDynamicText.ts', './ClickMoveBinding.ts', './ColorLibrary.ts', './FreeCamera.ts', './GlobalClickManager.ts', './InteractionState.ts', './PieceSpawner.ts', './PointerIds.ts', './RandomOpenButton.ts', './RotateYByKeys.ts', './StartApp.ts', './UIScaleBounce.ts', './VerticalMoveAroundTarget.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/PieceSpawner.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ColorLibrary.ts', './ClickMoveBinding.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, instantiate, Vec3, Component, ColorTextureLibrary, ClickMoveBinding;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      ColorTextureLibrary = module.ColorTextureLibrary;
    }, function (module) {
      ClickMoveBinding = module.ClickMoveBinding;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;
      cclegacy._RF.push({}, "afb06F8c6dL7IKM2pPDv/LO", "PieceSpawner", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PieceSpawner = exports('PieceSpawner', (_dec = ccclass('PieceSpawner'), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        tooltip: 'Имя переменной цвета у материала (например: albedo, baseColor, mainColor, _BaseColor)'
      }), _dec4 = property({
        tooltip: 'Индекс материала в MeshRenderer'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PieceSpawner, _Component);
        function PieceSpawner() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "prefab", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "totalObjects", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "objectsPerLevel", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "angleStep", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "baseScale", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "levelScaleFactor", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "baseHeight", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "levelPadding", _descriptor8, _assertThisInitialized(_this));
          // === цвет ===
          _initializerDefineProperty(_this, "colorUniform", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "materialIndex", _descriptor10, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = PieceSpawner.prototype;
        _proto.start = function start() {
          this.spawnObjects();
        }

        /** высота предыдущих уровней с учётом скейла */;
        _proto.levelYOffset = function levelYOffset(level) {
          if (level <= 0) return 0;
          var H0 = this.baseHeight * this.baseScale;
          var f = this.levelScaleFactor;
          var sumHeights = Math.abs(1 - f) < 1e-6 ? level * H0 : H0 * (1 - Math.pow(f, level)) / (1 - f);
          return sumHeights + level * this.levelPadding;
        };
        _proto.spawnObjects = function spawnObjects() {
          if (!this.prefab) {
            console.warn('Prefab не назначен!');
            return;
          }
          for (var i = 0; i < this.totalObjects; i++) {
            var level = Math.floor(i / this.objectsPerLevel);
            var scale = this.baseScale * Math.pow(this.levelScaleFactor, level);
            var obj = instantiate(this.prefab);
            obj.setParent(this.node);
            var y = this.levelYOffset(level);
            obj.setPosition(new Vec3(0, y, 0));
            obj.setRotationFromEuler(new Vec3(0, i * this.angleStep, 0));
            obj.setScale(scale, scale, scale);

            // 👇 теперь берем MeshRenderer через ClickMoveBinding
            var binding = obj.getComponent(ClickMoveBinding);
            if (binding != null && binding.meshRenderer && ColorTextureLibrary.instance) {
              ColorTextureLibrary.instance.applyRandomSet(binding.meshRenderer, this.materialIndex);
            }
          }
        };
        return PieceSpawner;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "prefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "totalObjects", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 24;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "objectsPerLevel", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 8;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "angleStep", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 45;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "baseScale", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "levelScaleFactor", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.9;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "baseHeight", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "levelPadding", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "colorUniform", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'albedo';
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "materialIndex", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PlaneDynamicText.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, MeshRenderer, Font, Material, Layers, Node, Canvas, Camera, UITransform, Label, RenderTexture, Sprite, SpriteFrame, Component, Color, Vec2;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      MeshRenderer = module.MeshRenderer;
      Font = module.Font;
      Material = module.Material;
      Layers = module.Layers;
      Node = module.Node;
      Canvas = module.Canvas;
      Camera = module.Camera;
      UITransform = module.UITransform;
      Label = module.Label;
      RenderTexture = module.RenderTexture;
      Sprite = module.Sprite;
      SpriteFrame = module.SpriteFrame;
      Component = module.Component;
      Color = module.Color;
      Vec2 = module.Vec2;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "3d352ua7alOarkMYS5baE0g", "PlaneDynamicText", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        executeInEditMode = _decorator.executeInEditMode,
        requireComponent = _decorator.requireComponent;

      /**
       * Рендерит Label в RenderTexture и показывает его на плейне (во весь UV).
       * В поле baseMaterial укажите материал на эффекте builtin-unlit (или другом с картой цвета).
       */
      var PlaneDynamicText = exports('PlaneDynamicText', (_dec = ccclass('PlaneDynamicText'), _dec2 = executeInEditMode(true), _dec3 = requireComponent(MeshRenderer), _dec4 = property({
        type: Font
      }), _dec5 = property(Material), _dec6 = property({
        tooltip: 'Пересоздать RenderTexture и перепривязать материал',
        editorOnly: true
      }), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PlaneDynamicText, _Component);
        function PlaneDynamicText() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          // ---- текст / шрифт ----
          _initializerDefineProperty(_this, "text", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "font", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "fontSize", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "color", _descriptor4, _assertThisInitialized(_this));
          // размер RenderTexture (качество)
          _initializerDefineProperty(_this, "rtSize", _descriptor5, _assertThisInitialized(_this));
          // материал (желательно на эффекте builtin-unlit)
          _initializerDefineProperty(_this, "baseMaterial", _descriptor6, _assertThisInitialized(_this));
          // фон RT (A=0 — прозрачный; для диагностики можно временно A=255)
          _initializerDefineProperty(_this, "background", _descriptor7, _assertThisInitialized(_this));
          // превью RT в углу экрана (для отладки)
          _initializerDefineProperty(_this, "debugShowRTInUISprite", _descriptor8, _assertThisInitialized(_this));
          // Псевдокнопка в инспекторе: поставить галку → пересоздать RT/материал
          _initializerDefineProperty(_this, "Regenerate", _descriptor9, _assertThisInitialized(_this));
          _this._mr = void 0;
          _this._matInst = null;
          _this._rt = null;
          _this._cam = void 0;
          _this._canvas = void 0;
          _this._label = void 0;
          // debug sprite
          _this._uiDebugCanvas = null;
          _this._uiDebugSprite = null;
          return _this;
        }
        var _proto = PlaneDynamicText.prototype;
        _proto.onLoad = function onLoad() {
          this._mr = this.getComponent(MeshRenderer);
          this._setupRTPipeline();
          this._setupMaterial();
          this._applyAll(true);
          this._setupDebugUISprite();
        };
        _proto.onValidate = function onValidate() {
          // кнопка в инспекторе
          if (this.Regenerate) {
            this.Regenerate = false;
            this.recreate();
            return;
          }
          this._applyAll(false);
          this._setupDebugUISprite();
        }

        // --- публичные методы ---
        ;

        _proto.setText = function setText(s) {
          this.text = s;
          if (this._label) this._label.string = s;
        };
        _proto.setFont = function setFont(f) {
          this.font = f;
          if (this._label && f) this._label.font = f;
        };
        _proto.setFontSize = function setFontSize(px) {
          this.fontSize = px;
          if (this._label) this._label.fontSize = px;
        };
        _proto.setTextColor = function setTextColor(c) {
          this.color = c;
          if (this._label) this._label.color = c;
        }

        /** Полная пересборка: удаляет старый RT, создаёт новый, перепривязывает материал и превью. */;
        _proto.recreate = function recreate() {
          // пересоздаём offscreen-RT
          this._disposeRT();
          this._createRT();

          // переустановим материал и текстуру
          this._setupMaterial();
          this._applyAll(true);
          this._setupDebugUISprite();
        }

        // === Мини-UI → Camera → RenderTexture ===
        ;

        _proto._setupRTPipeline = function _setupRTPipeline() {
          var _ref, _ClearFlagEnum$SOLID_, _Projection;
          if (this._label && this._cam) return;
          var UI_ENUM = Layers.Enum.UI_2D;
          var UI_MASK = Layers.BitMask.UI_2D;

          // Canvas (offscreen)
          var canvasNode = new Node('RT_Canvas');
          canvasNode.layer = UI_ENUM;
          this.node.addChild(canvasNode);
          this._canvas = canvasNode.addComponent(Canvas);

          // Camera (offscreen)
          var camNode = new Node('RT_Camera');
          camNode.layer = UI_ENUM;
          this.node.addChild(camNode);
          this._cam = camNode.addComponent(Camera);
          this._cam.visibility = UI_MASK;

          // Clear flags (3.8.7)
          // @ts-ignore
          var ClearFlagEnum = Camera.ClearFlag;
          this._cam.clearFlags = (_ref = (_ClearFlagEnum$SOLID_ = ClearFlagEnum == null ? void 0 : ClearFlagEnum.SOLID_COLOR) != null ? _ClearFlagEnum$SOLID_ : ClearFlagEnum == null ? void 0 : ClearFlagEnum.COLOR) != null ? _ref : ClearFlagEnum == null ? void 0 : ClearFlagEnum.DEPTH_ONLY;
          this._cam.clearColor = this.background;

          // ORTHO проекция (кросс-версионно)
          // @ts-ignore
          var ProjectionEnum = (_Projection = Camera.Projection) != null ? _Projection : Camera.ProjectionType;
          this._cam.projection = ProjectionEnum.ORTHO;

          // связать Canvas с камерой
          this._canvas.cameraComponent = this._cam;

          // Label
          var labelNode = new Node('RT_Label');
          labelNode.layer = UI_ENUM;
          canvasNode.addChild(labelNode);
          var ut = labelNode.addComponent(UITransform);
          ut.anchorX = 0.5;
          ut.anchorY = 0.5;
          ut.setContentSize(this.rtSize.x, this.rtSize.y);
          this._label = labelNode.addComponent(Label);
          this._label.string = this.text;
          this._label.fontSize = this.fontSize;
          if (this.font) this._label.font = this.font;
          this._label.color = this.color;
          this._label.horizontalAlign = Label.HorizontalAlign.CENTER;
          this._label.verticalAlign = Label.VerticalAlign.CENTER;

          // создаём RT впервые
          this._createRT();
        };
        _proto._createRT = function _createRT() {
          this._rt = new RenderTexture();
          this._rt.reset({
            width: this.rtSize.x,
            height: this.rtSize.y
          });
          this._cam.targetTexture = this._rt;
          this._cam.orthoHeight = this.rtSize.y * 0.5;
        };
        _proto._disposeRT = function _disposeRT() {
          var _this$_uiDebugSprite;
          if (this._cam) this._cam.targetTexture = null;
          if ((_this$_uiDebugSprite = this._uiDebugSprite) != null && _this$_uiDebugSprite.spriteFrame) {
            this._uiDebugSprite.spriteFrame = null;
          }
          if (this._rt) {
            this._rt.destroy();
            this._rt = null;
          }
        }

        // === Назначаем материал и кладём RT в текстурный слот ===
        ;

        _proto._setupMaterial = function _setupMaterial() {
          if (!this.baseMaterial) {
            console.warn('[PlaneDynamicText] Укажите baseMaterial (материал на builtin-unlit).');
            return;
          }
          // ставим asset-материал в слот 0
          this._mr.setMaterial(this.baseMaterial, 0);

          // уникальный инстанс для этого MeshRenderer
          this._matInst = this._mr.getMaterialInstance(0);
          if (this._rt) this._applyTextureToMaterial();
        };
        _proto._applyTextureToMaterial = function _applyTextureToMaterial() {
          if (!this._matInst || !this._rt) return;

          // самые частые имена свойств текстуры у материалов
          var keys = ['mainTexture', 'albedoMap', 'diffuseMap', 'baseColorMap'];
          var appliedKey = null;
          for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
            var k = _keys[_i];
            try {
              this._matInst.setProperty(k, this._rt);
              appliedKey = k;
              break;
            } catch (_) {/* пробуем след. имя */}
          }
          if (!appliedKey) {
            console.warn('[PlaneDynamicText] Не нашёл слот текстуры в материале. Посмотри имя в инспекторе и добавь его в keys.');
          } else {
            var _this$_matInst;
            // @ts-ignore — опционально
            (_this$_matInst = this._matInst) == null || _this$_matInst.recompileShaders == null || _this$_matInst.recompileShaders();
            console.log("[PlaneDynamicText] RenderTexture \u2192 " + appliedKey);
          }
        }

        // === Превью RT в UI-спрайте (для отладки) ===
        ;

        _proto._setupDebugUISprite = function _setupDebugUISprite() {
          if (!this.debugShowRTInUISprite) {
            if (this._uiDebugSprite) this._uiDebugSprite.node.active = false;
            return;
          }
          if (!this._rt) return;
          if (!this._uiDebugSprite) {
            var _this$node$scene;
            var uiCanvasNode = new Node('DEBUG_RT_CANVAS');
            uiCanvasNode.layer = Layers.Enum.UI_2D;
            (_this$node$scene = this.node.scene) == null || _this$node$scene.addChild(uiCanvasNode);
            this._uiDebugCanvas = uiCanvasNode.addComponent(Canvas);
            var spNode = new Node('DEBUG_RT_SPRITE');
            spNode.layer = Layers.Enum.UI_2D;
            uiCanvasNode.addChild(spNode);
            var ut = spNode.addComponent(UITransform);
            ut.setContentSize(this.rtSize.x * 0.5, this.rtSize.y * 0.5);
            spNode.setPosition(ut.width * 0.5, -ut.height * 0.5);
            this._uiDebugSprite = spNode.addComponent(Sprite);
          }
          var sf = new SpriteFrame();
          // @ts-ignore
          sf.texture = this._rt;
          this._uiDebugSprite.spriteFrame = sf;
          this._uiDebugSprite.node.active = true;
        }

        // === Применяем текущие параметры ===
        ;

        _proto._applyAll = function _applyAll(force) {
          if (force === void 0) {
            force = false;
          }
          if (!this._label || !this._cam || !this._rt) return;

          // текст / шрифт / размер / цвет
          if (force || this._label.string !== this.text) this._label.string = this.text;
          if (force || this._label.fontSize !== this.fontSize) this._label.fontSize = this.fontSize;
          if (this.font) this._label.font = this.font;
          this._label.color = this.color;

          // размер RT и фон
          var ut = this._label.node.getComponent(UITransform);
          ut.setContentSize(this.rtSize.x, this.rtSize.y);
          this._rt.reset({
            width: this.rtSize.x,
            height: this.rtSize.y
          });
          this._cam.orthoHeight = this.rtSize.y * 0.5;
          this._cam.clearColor = this.background;

          // убедимся, что RT в материале
          this._applyTextureToMaterial();

          // отладочное превью (если включено)
          this._setupDebugUISprite();
        };
        return PlaneDynamicText;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "text", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'Привет!';
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "font", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "fontSize", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 96;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "color", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(0, 0, 0, 255);
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "rtSize", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec2(1024, 512);
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "baseMaterial", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "background", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(0, 255, 0, 0);
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "debugShowRTInUISprite", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "Regenerate", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PointerIds.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "13922PSQAhJcJjhZ5FF88EN", "PointerIds", undefined);
      // PointerIds.ts
      var MOUSE_ID = exports('MOUSE_ID', -1); // ������ �������� ������
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RandomOpenButton.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GlobalClickManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, Component, GlobalClickManager3D;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      GlobalClickManager3D = module.GlobalClickManager3D;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "6a522r13OFAKqKll7GvHcNg", "RandomOpenButton", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var RandomOpenButton = exports('RandomOpenButton', (_dec = ccclass('RandomOpenButton'), _dec2 = property({
        type: GlobalClickManager3D,
        tooltip: '������ �� GlobalClickManager3D �� �����'
      }), _dec3 = property({
        type: Node,
        tooltip: '������, ��� ����� ������������ ������� (parent � PieceSpawner)'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RandomOpenButton, _Component);
        function RandomOpenButton() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "clickManager", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "piecesRoot", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = RandomOpenButton.prototype;
        /** ���������� ������ (Button -> Click Events -> this -> onClick) */
        _proto.onClick = /*#__PURE__*/
        function () {
          var _onClick = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var ok;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!(!this.clickManager || !this.piecesRoot)) {
                    _context.next = 3;
                    break;
                  }
                  console.warn('[RandomOpenButton] �� ������ clickManager ��� piecesRoot');
                  return _context.abrupt("return");
                case 3:
                  _context.next = 5;
                  return this.clickManager.toggleOrOpenRandom(this.piecesRoot);
                case 5:
                  ok = _context.sent;
                  if (!ok) console.log('[RandomOpenButton] �� ������� ������� ��������� �������.');
                case 7:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function onClick() {
            return _onClick.apply(this, arguments);
          }
          return onClick;
        }();
        _proto.onClickMy = /*#__PURE__*/function () {
          var _onClickMy = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var ok;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(!this.clickManager || !this.piecesRoot)) {
                    _context2.next = 3;
                    break;
                  }
                  console.warn('[RandomOpenButton] �� ������ clickManager ��� piecesRoot');
                  return _context2.abrupt("return");
                case 3:
                  _context2.next = 5;
                  return this.clickManager.toggleOrOpen(this.piecesRoot);
                case 5:
                  ok = _context2.sent;
                  if (!ok) console.log('[RandomOpenButton] �� ������� ������� ��������� �������.');
                case 7:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function onClickMy() {
            return _onClickMy.apply(this, arguments);
          }
          return onClickMy;
        }();
        return RandomOpenButton;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "clickManager", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "piecesRoot", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RotateYByKeys.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './InteractionState.ts', './PointerIds.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, input, Input, KeyCode, Component, InteractionState, MOUSE_ID;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      input = module.input;
      Input = module.Input;
      KeyCode = module.KeyCode;
      Component = module.Component;
    }, function (module) {
      InteractionState = module.InteractionState;
    }, function (module) {
      MOUSE_ID = module.MOUSE_ID;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "717452jV8ZDv7JZnElpm+X0", "RotateYByKeys", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var RotateYByKeys = exports('RotateYByKeys', (_dec = ccclass('RotateYByKeys'), _dec2 = property({
        tooltip: 'Скорость вращения от клавиш (град/сек)'
      }), _dec3 = property({
        tooltip: 'Чувствительность драга: градусов на 1 пиксель'
      }), _dec4 = property({
        tooltip: 'Порог пикселей, после которого считаем жест drag'
      }), _dec5 = property({
        tooltip: 'Мёртвая зона по углу: пока |Δугол| меньше — не вращаем'
      }), _dec6 = property({
        tooltip: 'Плавность вращения (сек) — и разгон, и отпускание'
      }), _dec7 = property({
        tooltip: 'Инвертировать направление вращения'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RotateYByKeys, _Component);
        function RotateYByKeys() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "rotateSpeed", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "degPerPixel", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dragThreshold", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "startMoveOffsetDeg", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "angularSmoothTime", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "invert", _descriptor6, _assertThisInitialized(_this));
          // --- клавиатура
          _this.keyDir = 0;
          _this.kbAccumDeg = 0;
          _this.kbActive = false;
          // --- тач
          _this.activeTouchId = null;
          _this.touchStartX = null;
          _this.touchLastX = null;
          _this.touchDragging = false;
          _this.touchAccumDeg = 0;
          _this.touchActive = false;
          _this.touchClaimed = false;
          // --- мышь
          _this.mouseHeld = false;
          _this.mouseStartX = null;
          _this.mouseLastX = null;
          _this.mouseDragging = false;
          _this.mouseAccumDeg = 0;
          _this.mouseActive = false;
          _this.mouseClaimed = false;
          // --- инерция
          _this.angVel = 0;
          // град/сек
          _this.pendingDegFromPointer = 0;
          return _this;
        }
        var _proto = RotateYByKeys.prototype;
        // градусы за кадр из поинтера
        _proto._resetInteractionIfStuck = function _resetInteractionIfStuck() {
          InteractionState.hardReset();
        }

        /** Остановить инерцию и сбросить накопленный ввод указателя (для автоповорота). */;
        _proto.stopInertia = function stopInertia() {
          this.angVel = 0;
          this.pendingDegFromPointer = 0;
          this.keyDir = 0;
          this.kbAccumDeg = 0;
          this.kbActive = false;
          this.mouseHeld = false;
          this.mouseDragging = false;
          this.mouseAccumDeg = 0;
          this.mouseActive = false;
          this.mouseClaimed = false;
          this.touchDragging = false;
          this.touchAccumDeg = 0;
          this.touchActive = false;
          this.touchClaimed = false;
        };
        _proto.onEnable = function onEnable() {
          this._resetInteractionIfStuck();
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
          input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
          input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          input.on(Input.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
          input.on(Input.EventType.MOUSE_DOWN, this.onMouseDown, this);
          input.on(Input.EventType.MOUSE_MOVE, this.onMouseMove, this);
          input.on(Input.EventType.MOUSE_UP, this.onMouseUp, this);
        };
        _proto.onDisable = function onDisable() {
          input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
          input.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
          input.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          input.off(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          input.off(Input.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
          input.off(Input.EventType.MOUSE_DOWN, this.onMouseDown, this);
          input.off(Input.EventType.MOUSE_MOVE, this.onMouseMove, this);
          input.off(Input.EventType.MOUSE_UP, this.onMouseUp, this);
        }

        // === клавиатура
        ;

        _proto.onKeyDown = function onKeyDown(e) {
          if (e.keyCode === KeyCode.KEY_A) this.keyDir = -1;else if (e.keyCode === KeyCode.KEY_D) this.keyDir = 1;
        };
        _proto.onKeyUp = function onKeyUp(e) {
          var wasDir = e.keyCode === KeyCode.KEY_A && this.keyDir === -1 || e.keyCode === KeyCode.KEY_D && this.keyDir === 1;
          if (wasDir) {
            this.keyDir = 0;
            this.kbAccumDeg = 0;
            this.kbActive = false;
          }
        }

        // === тач (ленивый захват)
        ;

        _proto.onTouchStart = function onTouchStart(e) {
          if (InteractionState.inGesture && InteractionState.source === 'touch') return;
          if (this.activeTouchId !== null) return;
          var id = e.getID();
          this.activeTouchId = id;
          var x = e.getLocationX();
          this.touchStartX = x;
          this.touchLastX = x;
          this.touchDragging = false;
          this.touchAccumDeg = 0;
          this.touchActive = false;
          this.touchClaimed = false;
        };
        _proto.onTouchMove = function onTouchMove(e) {
          var id = e.getID();
          if (this.activeTouchId !== id || this.touchLastX === null || this.touchStartX === null) return;
          if (InteractionState.inGesture && InteractionState.source === 'touch' && !this.touchClaimed) return;
          var x = e.getLocationX();
          var dxIncPx = x - this.touchLastX;
          var totalPx = x - this.touchStartX;
          this.touchLastX = x;
          if (!this.touchDragging && Math.abs(totalPx) >= this.dragThreshold) this.touchDragging = true;
          if (dxIncPx === 0) return;
          var sign = this.invert ? -1 : 1;
          var dxIncDeg = dxIncPx * this.degPerPixel * sign;
          if (!this.touchActive) {
            this.touchAccumDeg += dxIncDeg;
            if (this.touchDragging && Math.abs(this.touchAccumDeg) >= this.startMoveOffsetDeg) {
              if (!InteractionState.inGesture) {
                this.touchActive = true;
                InteractionState.beginGesture(id, 'touch');
                this.touchClaimed = true;
                InteractionState.markDrag(id);
              } else {
                return;
              }
            } else {
              return;
            }
          }
          if (this.touchClaimed) {
            this.pendingDegFromPointer += dxIncDeg;
          }
        };
        _proto.onTouchEnd = function onTouchEnd(e) {
          if (this.activeTouchId !== e.getID()) return;
          if (this.touchClaimed) InteractionState.tryEndGesture(e.getID(), 'touch');
          this.activeTouchId = null;
          this.touchStartX = this.touchLastX = null;
          this.touchDragging = false;
          this.touchAccumDeg = 0;
          this.touchActive = false;
          this.touchClaimed = false;
        };
        _proto.onTouchCancel = function onTouchCancel(e) {
          if (this.activeTouchId !== e.getID()) return;
          if (this.touchClaimed) InteractionState.tryEndGesture(e.getID(), 'touch');
          this.activeTouchId = null;
          this.touchStartX = this.touchLastX = null;
          this.touchDragging = false;
          this.touchAccumDeg = 0;
          this.touchActive = false;
          this.touchClaimed = false;
        }

        // === мышь (ленивый захват)
        ;

        _proto.onMouseDown = function onMouseDown(e) {
          if (e.getButton() !== 0) return;
          this.mouseHeld = true;
          var x = e.getLocationX();
          this.mouseStartX = x;
          this.mouseLastX = x;
          this.mouseDragging = false;
          this.mouseAccumDeg = 0;
          this.mouseActive = false;
          this.mouseClaimed = false;
        };
        _proto.onMouseMove = function onMouseMove(e) {
          if (!this.mouseHeld || this.mouseLastX === null || this.mouseStartX === null) return;
          var x = e.getLocationX();
          var dxIncPx = x - this.mouseLastX;
          var totalPx = x - this.mouseStartX;
          this.mouseLastX = x;
          if (!this.mouseDragging && Math.abs(totalPx) >= this.dragThreshold) this.mouseDragging = true;
          if (dxIncPx === 0) return;
          var sign = this.invert ? -1 : 1;
          var dxIncDeg = dxIncPx * this.degPerPixel * sign;
          if (!this.mouseActive) {
            this.mouseAccumDeg += dxIncDeg;
            if (this.mouseDragging && Math.abs(this.mouseAccumDeg) >= this.startMoveOffsetDeg) {
              this.mouseActive = true;
              if (!InteractionState.inGesture) {
                InteractionState.beginGesture(MOUSE_ID, 'mouse');
                this.mouseClaimed = true;
              }
              InteractionState.markDrag(MOUSE_ID);
            } else {
              return;
            }
          }
          this.pendingDegFromPointer += dxIncDeg;
        };
        _proto.onMouseUp = function onMouseUp(e) {
          if (e.getButton() !== 0) return;
          if (this.mouseClaimed) InteractionState.tryEndGesture(MOUSE_ID, 'mouse');
          this.mouseHeld = false;
          this.mouseStartX = this.mouseLastX = null;
          this.mouseDragging = false;
          this.mouseAccumDeg = 0;
          this.mouseActive = false;
          this.mouseClaimed = false;
        }

        // === апдейт / инерция
        ;

        _proto.update = function update(dt) {
          var sign = this.invert ? -1 : 1;
          if (this.keyDir !== 0) {
            if (!this.kbActive) {
              this.kbAccumDeg += Math.abs(this.rotateSpeed * dt);
              if (this.kbAccumDeg >= this.startMoveOffsetDeg) this.kbActive = true;
            }
          } else {
            this.kbAccumDeg = 0;
            this.kbActive = false;
          }
          var keyboardTargetVel = this.keyDir !== 0 && this.kbActive ? this.rotateSpeed * this.keyDir * sign : 0;
          var pointerTargetVel = this.pendingDegFromPointer / Math.max(dt, 1e-5);
          this.pendingDegFromPointer = 0;
          var targetVel = keyboardTargetVel + pointerTargetVel;
          var k = this.angularSmoothTime > 0 ? 1 - Math.exp(-dt / this.angularSmoothTime) : 1;
          this.angVel += (targetVel - this.angVel) * k;
          if (this.angVel !== 0) {
            var euler = this.node.eulerAngles;
            euler.y += this.angVel * dt;
            this.node.setRotationFromEuler(euler);
          }
          var localActive = this.mouseActive || this.touchActive || this.keyDir !== 0 && this.kbActive;
          if (!InteractionState.inGesture && !localActive && InteractionState.isRotating) {
            InteractionState.isRotating = false;
          }
          if (!localActive && Math.abs(this.angVel) < 0.05) this.angVel = 0;
        };
        return RotateYByKeys;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "rotateSpeed", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 90;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "degPerPixel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.2;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "dragThreshold", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 12;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "startMoveOffsetDeg", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 3;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "angularSmoothTime", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.15;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "invert", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/StartApp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, game, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      game = module.game;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "03b4cr8mr5ANqGQ5koPtIAX", "StartApp", undefined);
      var ccclass = _decorator.ccclass;
      var UncapFPS = exports('UncapFPS', (_dec = ccclass('UncapFPS'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UncapFPS, _Component);
        function UncapFPS() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = UncapFPS.prototype;
        _proto.start = function start() {
          // ������ 240 fps (������� "��������")
          // ������ ���������� �������� �� ����������� ��������� ������� �������
          game.setFrameRate(240);
        };
        return UncapFPS;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIScaleBounce.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Vec3, tween, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec3 = module.Vec3;
      tween = module.tween;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11;
      cclegacy._RF.push({}, "e225dgcyF9JYayYp4NmAGoB", "UIScaleBounce", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * Показ/закрытие UI с баунс-скейлом и «айдлом»:
       * - playOpen(): 0 → overshoot → undershoot → final, затем бесконечный idle (вверх/вниз + лёгкий дыхающий скейл)
       * - playClose(): стоп idle, scale → 0, выключение
       */
      var UIScaleBounce = exports('UIScaleBounce', (_dec = ccclass('UIScaleBounce'), _dec2 = property({
        tooltip: 'Если пусто — анимируется этот же узел'
      }), _dec3 = property({
        tooltip: 'Итоговый масштаб после показа'
      }), _dec4 = property({
        tooltip: 'Оверсхут (выше финального) при показе'
      }), _dec5 = property({
        tooltip: 'Лёгкая просадка ниже финального'
      }), _dec6 = property({
        tooltip: 'Длительность 0 → оверсхут'
      }), _dec7 = property({
        tooltip: 'Длительность оверсхут → просадка'
      }), _dec8 = property({
        tooltip: 'Длительность просадка → финал'
      }), _dec9 = property({
        tooltip: 'Длительность закрытия (к 0)'
      }), _dec10 = property({
        tooltip: 'Амплитуда покачивания по Y (локально), в единицах'
      }), _dec11 = property({
        tooltip: 'Амплитуда дыхания скейла (± от finalScale)'
      }), _dec12 = property({
        tooltip: 'Полупериод одной фазы (вверх или вниз)'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UIScaleBounce, _Component);
        function UIScaleBounce() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "target", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "finalScale", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "overshootScale", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "undershootScale", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "upDuration", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "softenDuration", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "settleDuration", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "closeDuration", _descriptor8, _assertThisInitialized(_this));
          // ---------- Параметры «айдла» ----------
          _initializerDefineProperty(_this, "idleMoveOffsetY", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "idleScaleDelta", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "idleHalfDuration", _descriptor11, _assertThisInitialized(_this));
          _this._busy = false;
          _this._idleTween = null;
          _this._basePos = null;
          return _this;
        }
        var _proto = UIScaleBounce.prototype;
        _proto.onLoad = function onLoad() {
          if (!this.target) this.target = this.node;
          this.target.setScale(new Vec3(0, 0, 0));
        }

        /** Показ с баунсом (0 → overshoot → undershoot → final), затем запуск бесконечного idle. */;
        _proto.playOpen = /*#__PURE__*/
        function () {
          var _playOpen = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this2 = this;
            var t;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!(!this.target || this._busy)) {
                    _context.next = 2;
                    break;
                  }
                  return _context.abrupt("return");
                case 2:
                  this._busy = true;
                  t = this.target; // На всякий случай перед новым показом всё остановим и сбросим
                  this._stopIdle();
                  t.active = true;
                  t.setScale(new Vec3(0, 0, 0));
                  _context.next = 9;
                  return new Promise(function (resolve) {
                    tween(t).to(_this2.upDuration, {
                      scale: new Vec3(_this2.overshootScale, _this2.overshootScale, _this2.overshootScale)
                    }, {
                      easing: 'quadOut'
                    }).to(_this2.softenDuration, {
                      scale: new Vec3(_this2.undershootScale, _this2.undershootScale, _this2.undershootScale)
                    }, {
                      easing: 'quadInOut'
                    }).to(_this2.settleDuration, {
                      scale: new Vec3(_this2.finalScale, _this2.finalScale, _this2.finalScale)
                    }, {
                      easing: 'quadOut'
                    }).call(function () {
                      return resolve();
                    }).start();
                  });
                case 9:
                  // Запоминаем базовую позицию для покачивания (локальная позиция на момент стабилизации)
                  this._basePos = t.getPosition().clone();

                  // Запускаем бесконечный idle
                  this._startIdle();
                  this._busy = false;
                case 12:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function playOpen() {
            return _playOpen.apply(this, arguments);
          }
          return playOpen;
        }() /** Закрытие: стоп idle, мягко уводим масштаб к 0, отключаем узел. */;
        _proto.playClose = /*#__PURE__*/
        function () {
          var _playClose = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _this3 = this;
            var t;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(!this.target || this._busy)) {
                    _context2.next = 2;
                    break;
                  }
                  return _context2.abrupt("return");
                case 2:
                  this._busy = true;
                  t = this.target; // Останавливаем покачивание и возвращаем в базу/финальный скейл
                  this._stopIdle(true);
                  _context2.next = 7;
                  return new Promise(function (resolve) {
                    tween(t).to(_this3.closeDuration, {
                      scale: new Vec3(0, 0, 0)
                    }, {
                      easing: 'quadIn'
                    }).call(function () {
                      return resolve();
                    }).start();
                  });
                case 7:
                  t.active = false;
                  this._busy = false;
                case 9:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function playClose() {
            return _playClose.apply(this, arguments);
          }
          return playClose;
        }() // ---------- Внутренние помогающие ----------
        /** Старт бесконечного «айдла»: вверх/вниз + дыхание скейла. */;

        _proto._startIdle = function _startIdle() {
          if (!this.target || !this._basePos) return;
          var t = this.target;
          var base = this._basePos;

          // Начальное состояние — точно в базе и с финальным скейлом
          t.setPosition(base);
          t.setScale(new Vec3(this.finalScale, this.finalScale, this.finalScale));
          var upPos = new Vec3(base.x, base.y + this.idleMoveOffsetY, base.z);
          var downPos = new Vec3(base.x, base.y - this.idleMoveOffsetY, base.z);
          var scaleUp = this.finalScale + this.idleScaleDelta;
          var scaleDown = this.finalScale - this.idleScaleDelta;

          // Бесконечный цикл: вверх → вниз → (следующая итерация снова вверх...)
          this._idleTween = tween(t).repeatForever(tween().to(this.idleHalfDuration, {
            position: upPos,
            scale: new Vec3(scaleUp, scaleUp, scaleUp)
          }, {
            easing: 'sineInOut'
          }).to(this.idleHalfDuration, {
            position: downPos,
            scale: new Vec3(scaleDown, scaleDown, scaleDown)
          }, {
            easing: 'sineInOut'
          })).start();
        }

        /**
         * Остановить айдл. Если reset = true — вернуть узел в базовую позицию и финальный скейл.
         */;
        _proto._stopIdle = function _stopIdle(reset) {
          if (reset === void 0) {
            reset = false;
          }
          if (this._idleTween) {
            this._idleTween.stop();
            this._idleTween = null;
          }
          if (reset && this.target) {
            if (this._basePos) this.target.setPosition(this._basePos);
            this.target.setScale(new Vec3(this.finalScale, this.finalScale, this.finalScale));
          }
        };
        return UIScaleBounce;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "target", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "finalScale", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "overshootScale", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.08;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "undershootScale", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.96;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "upDuration", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.18;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "softenDuration", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.10;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "settleDuration", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.10;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "closeDuration", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.18;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "idleMoveOffsetY", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 6;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "idleScaleDelta", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.03;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "idleHalfDuration", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.6;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/VerticalMoveAroundTarget.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './InteractionState.ts', './PointerIds.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, clamp, tween, input, Input, KeyCode, Component, InteractionState, MOUSE_ID;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      clamp = module.clamp;
      tween = module.tween;
      input = module.input;
      Input = module.Input;
      KeyCode = module.KeyCode;
      Component = module.Component;
    }, function (module) {
      InteractionState = module.InteractionState;
    }, function (module) {
      MOUSE_ID = module.MOUSE_ID;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13;
      cclegacy._RF.push({}, "3885628609LXpglYnTN3MJQ", "VerticalMoveAroundTarget", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var VerticalMoveAroundTarget = exports('VerticalMoveAroundTarget', (_dec = ccclass('VerticalMoveAroundTarget'), _dec2 = property({
        type: Node,
        tooltip: 'Таргет для ориентира по Y (обычно тот же, что и в зуме).'
      }), _dec3 = property({
        tooltip: 'Стартовая высота камеры над таргетом.'
      }), _dec4 = property({
        tooltip: 'Минимальная/максимальная высота над таргетом.'
      }), _dec5 = property({
        tooltip: 'Ширина мягкой зоны на границе (ед.). Внутри неё скорость плавно гасится.'
      }), _dec6 = property({
        tooltip: 'Жёсткость возврата, когда вышли за пределы.'
      }), _dec7 = property({
        tooltip: 'Демпфирование возврата за пределами (критично ≈ 2*sqrt(K)).'
      }), _dec8 = property({
        tooltip: 'Инвертировать вертикальное управление (клавиши и драг).'
      }), _dec9 = property({
        tooltip: 'Чувствительность вертикального драга: единиц высоты на 1 пиксель.'
      }), _dec10 = property({
        tooltip: 'Порог пикселей для начала драга.'
      }), _dec11 = property({
        tooltip: 'Мёртвая зона: пока |ΔY| меньше — не двигаем.'
      }), _dec12 = property({
        tooltip: 'Макс. скорость по вертикали (ед/сек).'
      }), _dec13 = property({
        tooltip: 'Плавность вертикали (сек). Меньше — резче (и разгон, и отпускание).'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(VerticalMoveAroundTarget, _Component);
        function VerticalMoveAroundTarget() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "target", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "startHeight", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "minHeight", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "maxHeight", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "softRange", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "springK", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "springDamping", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "invertVertical", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "unitsPerPixelY", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dragThreshold", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "startMoveOffsetY", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "maxSpeed", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "moveSmoothTime", _descriptor13, _assertThisInitialized(_this));
          // === клавиатура
          _this.dirY = 0;
          _this.kbAccumY = 0;
          _this.kbActive = false;
          // === тач
          _this.touchActiveId = null;
          _this.touchStartY = null;
          _this.touchLastY = null;
          _this.touchDragging = false;
          _this.touchAccumUnits = 0;
          _this.touchActive = false;
          _this.touchClaimed = false;
          // === мышь
          _this.mouseHeld = false;
          _this.mouseStartY = null;
          _this.mouseLastY = null;
          _this.mouseDragging = false;
          _this.mouseAccumUnits = 0;
          _this.mouseActive = false;
          _this.mouseClaimed = false;
          // === кинематика / инерция
          _this.velY = 0;
          // ед/сек
          _this.baseYOffset = 0;
          // высота над таргетом
          _this.pendingUnitsFromPointer = 0;
          return _this;
        }
        var _proto = VerticalMoveAroundTarget.prototype;
        _proto._resetInteractionIfStuck = function _resetInteractionIfStuck() {
          InteractionState.hardReset();
        }

        /** Сбросить вертикальную инерцию/ввод (используем перед автопрыжком). */;
        _proto.stopInertia = function stopInertia() {
          this.velY = 0;
          this.pendingUnitsFromPointer = 0;
          this.dirY = 0;
          this.kbAccumY = 0;
          this.kbActive = false;
          this.mouseHeld = false;
          this.mouseDragging = false;
          this.mouseAccumUnits = 0;
          this.mouseActive = false;
          this.mouseClaimed = false;
          this.touchDragging = false;
          this.touchAccumUnits = 0;
          this.touchActive = false;
          this.touchClaimed = false;
        }

        /** Плавно перейти к высоте МИРОВОГО Y (с учётом target.y) за duration сек. */;
        _proto.moveToWorldY = function moveToWorldY(worldY, duration, extraOffset) {
          var _this2 = this;
          if (extraOffset === void 0) {
            extraOffset = 0;
          }
          return new Promise(function (resolve) {
            if (!_this2.target) {
              resolve();
              return;
            }
            var targetY = clamp(worldY - _this2.target.worldPosition.y + extraOffset, _this2.minHeight, _this2.maxHeight);

            // если почти там — ничего не делаем
            if (Math.abs(_this2.baseYOffset - targetY) < 0.01 || duration <= 0) {
              _this2.baseYOffset = targetY;
              resolve();
              return;
            }
            _this2.stopInertia();
            var start = {
              y: _this2.baseYOffset
            };
            tween(start).to(duration, {
              y: targetY
            }, {
              easing: 'quadOut',
              onUpdate: function onUpdate() {
                _this2.baseYOffset = start.y;
              }
            }).call(function () {
              return resolve();
            }).start();
          });
        }

        /** Удобно: прыгнуть к высоте конкретного узла (например, куска). */;
        _proto.moveToNode = function moveToNode(node, duration, extraOffset) {
          if (extraOffset === void 0) {
            extraOffset = 0;
          }
          return this.moveToWorldY(node.worldPosition.y, duration, extraOffset);
        };
        _proto.onEnable = function onEnable() {
          this._resetInteractionIfStuck();
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
          input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
          input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          input.on(Input.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
          input.on(Input.EventType.MOUSE_DOWN, this.onMouseDown, this);
          input.on(Input.EventType.MOUSE_MOVE, this.onMouseMove, this);
          input.on(Input.EventType.MOUSE_UP, this.onMouseUp, this);
        };
        _proto.onDisable = function onDisable() {
          input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
          input.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
          input.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          input.off(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          input.off(Input.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
          input.off(Input.EventType.MOUSE_DOWN, this.onMouseDown, this);
          input.off(Input.EventType.MOUSE_MOVE, this.onMouseMove, this);
          input.off(Input.EventType.MOUSE_UP, this.onMouseUp, this);
        };
        _proto.start = function start() {
          this.baseYOffset = clamp(this.startHeight, this.minHeight, this.maxHeight);
        }

        // === клавиатура
        ;

        _proto.onKeyDown = function onKeyDown(e) {
          if (e.keyCode === KeyCode.KEY_S) this.dirY = 1;else if (e.keyCode === KeyCode.KEY_W) this.dirY = -1;
        };
        _proto.onKeyUp = function onKeyUp(e) {
          if (e.keyCode === KeyCode.KEY_S && this.dirY === 1) this.dirY = 0;
          if (e.keyCode === KeyCode.KEY_W && this.dirY === -1) this.dirY = 0;
          if (this.dirY === 0) {
            this.kbAccumY = 0;
            this.kbActive = false;
          }
        }

        // === тач (ленивый захват)
        ;

        _proto.onTouchStart = function onTouchStart(e) {
          if (InteractionState.inGesture && InteractionState.source === 'touch') return;
          if (this.touchActiveId !== null) return;
          this.touchActiveId = e.getID();
          var y = e.getLocationY();
          this.touchStartY = y;
          this.touchLastY = y;
          this.touchDragging = false;
          this.touchAccumUnits = 0;
          this.touchActive = false;
          this.touchClaimed = false;
        };
        _proto.onTouchMove = function onTouchMove(e) {
          var id = e.getID();
          if (this.touchActiveId !== id || this.touchLastY === null || this.touchStartY === null) return;
          if (InteractionState.inGesture && InteractionState.source === 'touch' && !this.touchClaimed) return;
          var y = e.getLocationY();
          var dyIncPx = y - this.touchLastY;
          var totalPx = y - this.touchStartY;
          this.touchLastY = y;
          if (!this.touchDragging && Math.abs(totalPx) >= this.dragThreshold) this.touchDragging = true;
          if (dyIncPx === 0) return;
          var sign = this.invertVertical ? -1 : 1;
          var dyIncUnits = dyIncPx * this.unitsPerPixelY * sign;
          if (!this.touchActive) {
            this.touchAccumUnits += dyIncUnits;
            if (this.touchDragging && Math.abs(this.touchAccumUnits) >= this.startMoveOffsetY) {
              if (!InteractionState.inGesture) {
                this.touchActive = true;
                InteractionState.beginGesture(id, 'touch');
                this.touchClaimed = true;
                InteractionState.markDrag(id);
              } else {
                return;
              }
            } else {
              return;
            }
          }
          if (this.touchClaimed) {
            this.pendingUnitsFromPointer += dyIncUnits;
          }
        };
        _proto.onTouchEnd = function onTouchEnd(e) {
          if (this.touchActiveId !== e.getID()) return;
          if (this.touchClaimed) InteractionState.tryEndGesture(e.getID(), 'touch');
          this.touchActiveId = null;
          this.touchStartY = this.touchLastY = null;
          this.touchDragging = false;
          this.touchAccumUnits = 0;
          this.touchActive = false;
          this.touchClaimed = false;
        };
        _proto.onTouchCancel = function onTouchCancel(e) {
          if (this.touchActiveId !== e.getID()) return;
          if (this.touchClaimed) InteractionState.tryEndGesture(e.getID(), 'touch');
          this.touchActiveId = null;
          this.touchStartY = this.touchLastY = null;
          this.touchDragging = false;
          this.touchAccumUnits = 0;
          this.touchActive = false;
          this.touchClaimed = false;
        }

        // === мышь (ленивый захват)
        ;

        _proto.onMouseDown = function onMouseDown(e) {
          if (e.getButton() !== 0) return;
          this.mouseHeld = true;
          var y = e.getLocationY();
          this.mouseStartY = y;
          this.mouseLastY = y;
          this.mouseDragging = false;
          this.mouseAccumUnits = 0;
          this.mouseActive = false;
          this.mouseClaimed = false;
        };
        _proto.onMouseMove = function onMouseMove(e) {
          if (!this.mouseHeld || this.mouseLastY === null || this.mouseStartY === null) return;
          var y = e.getLocationY();
          var dyIncPx = y - this.mouseLastY;
          var totalPx = y - this.mouseStartY;
          this.mouseLastY = y;
          if (!this.mouseDragging && Math.abs(totalPx) >= this.dragThreshold) this.mouseDragging = true;
          if (dyIncPx === 0) return;
          var sign = this.invertVertical ? -1 : 1;
          var dyIncUnits = dyIncPx * this.unitsPerPixelY * sign;
          if (!this.mouseActive) {
            this.mouseAccumUnits += dyIncUnits;
            if (this.mouseDragging && Math.abs(this.mouseAccumUnits) >= this.startMoveOffsetY) {
              this.mouseActive = true;
              if (!InteractionState.inGesture) {
                InteractionState.beginGesture(MOUSE_ID, 'mouse');
                this.mouseClaimed = true;
              }
              InteractionState.markDrag(MOUSE_ID);
            } else return;
          }
          this.pendingUnitsFromPointer += dyIncUnits;
        };
        _proto.onMouseUp = function onMouseUp(e) {
          if (e.getButton() !== 0) return;
          if (this.mouseClaimed) InteractionState.tryEndGesture(MOUSE_ID, 'mouse');
          this.mouseHeld = false;
          this.mouseStartY = this.mouseLastY = null;
          this.mouseDragging = false;
          this.mouseAccumUnits = 0;
          this.mouseActive = false;
          this.mouseClaimed = false;
        }

        // === апдейт (инерция + мягкие границы)
        ;

        _proto.update = function update(dt) {
          var _this3 = this;
          var sign = this.invertVertical ? -1 : 1;
          if (this.dirY !== 0) {
            if (!this.kbActive) {
              this.kbAccumY += Math.abs(this.maxSpeed * dt);
              if (this.kbAccumY >= this.startMoveOffsetY) this.kbActive = true;
            }
          } else {
            this.kbAccumY = 0;
            this.kbActive = false;
          }
          var keyboardTargetVel = this.dirY !== 0 && this.kbActive ? this.dirY * this.maxSpeed * sign : 0;
          var pointerTargetVel = this.pendingUnitsFromPointer / Math.max(dt, 1e-5);
          this.pendingUnitsFromPointer = 0;
          var dToMin = this.baseYOffset - this.minHeight;
          var dToMax = this.maxHeight - this.baseYOffset;
          if (this.softRange > 0) {
            var softFactor = function softFactor(d) {
              if (d >= _this3.softRange) return 1;
              var t = clamp(d / _this3.softRange, 0, 1);
              return t * t * (3 - 2 * t);
            };
            if (keyboardTargetVel < 0) keyboardTargetVel *= softFactor(dToMin);
            if (pointerTargetVel < 0) pointerTargetVel *= softFactor(dToMin);
            if (keyboardTargetVel > 0) keyboardTargetVel *= softFactor(dToMax);
            if (pointerTargetVel > 0) pointerTargetVel *= softFactor(dToMax);
          }
          var targetVel = keyboardTargetVel + pointerTargetVel;
          var k = this.moveSmoothTime > 0 ? 1 - Math.exp(-dt / this.moveSmoothTime) : 1;
          this.velY += (targetVel - this.velY) * k;
          this.baseYOffset += this.velY * dt;
          if (this.baseYOffset < this.minHeight) {
            var error = this.minHeight - this.baseYOffset;
            this.velY += (this.springK * error - this.springDamping * this.velY) * dt;
            this.baseYOffset += this.velY * dt;
            if (this.baseYOffset < this.minHeight) this.baseYOffset = this.minHeight;
          } else if (this.baseYOffset > this.maxHeight) {
            var _error = this.maxHeight - this.baseYOffset;
            this.velY += (this.springK * _error - this.springDamping * this.velY) * dt;
            this.baseYOffset += this.velY * dt;
            if (this.baseYOffset > this.maxHeight) this.baseYOffset = this.maxHeight;
          }
          var localActive = this.mouseActive || this.touchActive || this.dirY !== 0 && this.kbActive;
          if (!InteractionState.inGesture && !localActive && InteractionState.isRotating) {
            InteractionState.isRotating = false;
          }
          if (!localActive && Math.abs(this.velY) < 0.02) this.velY = 0;
        };
        _createClass(VerticalMoveAroundTarget, [{
          key: "offsetY",
          get:
          // ΔY от поинтера за кадр (единицы)

          function get() {
            return this.baseYOffset;
          }
        }]);
        return VerticalMoveAroundTarget;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "target", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "startHeight", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "minHeight", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "maxHeight", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 30;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "softRange", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.8;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "springK", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 40;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "springDamping", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 12;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "invertVertical", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "unitsPerPixelY", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.02;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "dragThreshold", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "startMoveOffsetY", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.2;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "maxSpeed", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 8;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "moveSmoothTime", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.12;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});