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
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "06269Z0iQNODJORRQsOuBPu", "ClickMoveBinding", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ClickMoveBinding = exports('ClickMoveBinding', (_dec = ccclass('ClickMoveBinding'), _dec2 = property({
        type: Node,
        tooltip: '���� ������� ��� ����� �� ����� �������'
      }), _dec3 = property({
        type: MeshRenderer,
        tooltip: '������ �� MeshRenderer (��������, ��� ������ �����)'
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
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ColorLibrary.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, _inheritsLoose, _assertThisInitialized, _createClass, cclegacy, _decorator, Color, director, MeshRenderer, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _inheritsLoose = module.inheritsLoose;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Color = module.Color;
      director = module.director;
      MeshRenderer = module.MeshRenderer;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class, _descriptor, _descriptor2, _dec2, _dec3, _class3, _class4, _descriptor3, _class5;
      cclegacy._RF.push({}, "8daf7NAKxNJnqCgflAGm7av", "ColorLibrary", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var NamedColor = (_dec = property({
        type: Color
      }), (_class = function NamedColor() {
        _initializerDefineProperty(this, "name", _descriptor, this);
        _initializerDefineProperty(this, "color", _descriptor2, this);
      }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "name", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "color", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(255, 255, 255, 255);
        }
      })), _class));
      var ColorLibrary = exports('ColorLibrary', (_dec2 = ccclass('ColorLibrary'), _dec3 = property({
        type: [Color],
        tooltip: 'Редактируй цвета тут'
      }), _dec2(_class3 = (_class4 = (_class5 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ColorLibrary, _Component);
        function ColorLibrary() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "palette", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = ColorLibrary.prototype;
        _proto.onLoad = function onLoad() {
          if (ColorLibrary._i) {
            this.destroy();
            return;
          }
          ColorLibrary._i = this;
          director.addPersistRootNode(this.node);
        };
        _proto.getRandomColor = function getRandomColor() {
          if (!this.palette || this.palette.length === 0) {
            console.warn('[ColorLibrary] палитра пуста!');
            return null;
          }
          var idx = Math.random() * this.palette.length | 0;
          return this.palette[idx];
        }

        /** Установить color в указанный юниформ(ы). target — MeshRenderer или Node с ним */;
        _proto.applyColor = function applyColor(target, color, uniform, matIndex) {
          if (matIndex === void 0) {
            matIndex = 0;
          }
          var mr = target instanceof MeshRenderer ? target : target.getComponent(MeshRenderer);
          mr.materials[matIndex].setProperty(uniform, color);
        };
        _proto.applyRandomColor = function applyRandomColor(target, uniform, matIndex) {
          if (matIndex === void 0) {
            matIndex = 0;
          }
          var c = this.getRandomColor();
          if (!c) return false;
          this.applyColor(target, c, uniform, matIndex);
        };
        _createClass(ColorLibrary, null, [{
          key: "instance",
          get: function get() {
            return this._i;
          }
        }]);
        return ColorLibrary;
      }(Component), _class5._i = void 0, _class5), _descriptor3 = _applyDecoratedDescriptor(_class4.prototype, "palette", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _class4)) || _class3));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FreeCamera.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, input, Input, KeyCode, Vec3, Component;
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
      input = module.input;
      Input = module.Input;
      KeyCode = module.KeyCode;
      Vec3 = module.Vec3;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11;
      cclegacy._RF.push({}, "15f6cp12VhM7IGhUEx42YWM", "FreeCamera", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var VerticalZoomAroundTargetXZ = exports('VerticalZoomAroundTargetXZ', (_dec = ccclass('VerticalZoomAroundTargetXZ'), _dec2 = property({
        type: Node,
        tooltip: 'Таргет: и вертикаль (Y), и точка зума (XZ).'
      }), _dec3 = property({
        tooltip: 'Стартовая высота камеры над таргетом.'
      }), _dec4 = property({
        tooltip: 'Азимут (yaw) вокруг таргета в градусах. 0° = +Z, 90° = +X.'
      }), _dec5 = property({
        tooltip: 'Начальная дистанция до таргета (XZ).'
      }), _dec6 = property({
        tooltip: 'Пределы дистанции (зум).'
      }), _dec7 = property({
        tooltip: 'Шаг зума от колёсика.'
      }), _dec8 = property({
        tooltip: 'Инвертировать колесо: к себе — приближение.'
      }), _dec9 = property({
        tooltip: 'Макс. скорость по вертикали (ед/сек).'
      }), _dec10 = property({
        tooltip: 'Плавность вертикали (сек). Меньше — резче.'
      }), _dec11 = property({
        tooltip: 'Плавность зума (сек). Меньше — резче.'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(VerticalZoomAroundTargetXZ, _Component);
        function VerticalZoomAroundTargetXZ() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "target", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "startHeight", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "yawDeg", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "distance", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "minDistance", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "maxDistance", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "zoomStep", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "invertWheel", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "maxSpeed", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "moveSmoothTime", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "zoomSmoothTime", _descriptor11, _assertThisInitialized(_this));
          _this.dirY = 0;
          _this.velY = 0;
          _this.baseYOffset = 0;
          _this.targetDistance = 0;
          _this.currentDistance = 0;
          return _this;
        }
        var _proto = VerticalZoomAroundTargetXZ.prototype;
        _proto.onEnable = function onEnable() {
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
          input.on(Input.EventType.MOUSE_WHEEL, this.onMouseWheel, this);
        };
        _proto.onDisable = function onDisable() {
          input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
          input.off(Input.EventType.MOUSE_WHEEL, this.onMouseWheel, this);
        };
        _proto.start = function start() {
          if (!this.target) {
            console.error('[VerticalZoom] Target не задан!');
            return;
          }

          // стартовая высота
          this.baseYOffset = this.startHeight;

          // дистанция берём из инспектора
          this.targetDistance = this.distance;
          this.currentDistance = this.distance;

          // сразу выставим камеру
          this.applyTransform(0);
        };
        _proto.onKeyDown = function onKeyDown(e) {
          if (e.keyCode === KeyCode.KEY_W) this.dirY = 1;else if (e.keyCode === KeyCode.KEY_S) this.dirY = -1;
        };
        _proto.onKeyUp = function onKeyUp(e) {
          if (e.keyCode === KeyCode.KEY_W && this.dirY === 1) this.dirY = 0;
          if (e.keyCode === KeyCode.KEY_S && this.dirY === -1) this.dirY = 0;
        };
        _proto.onMouseWheel = function onMouseWheel(e) {
          var sign = this.invertWheel ? -1 : 1;
          this.targetDistance += sign * e.getScrollY() * this.zoomStep * 0.1;
          this.targetDistance = Math.max(this.minDistance, Math.min(this.maxDistance, this.targetDistance));
        };
        _proto.update = function update(dt) {
          if (!this.target) return;

          // вертикаль
          var targetVel = this.dirY * this.maxSpeed;
          var mv = this.moveSmoothTime > 0 ? 1 - Math.exp(-dt / this.moveSmoothTime) : 1;
          this.velY += (targetVel - this.velY) * mv;
          if (Math.abs(this.velY) < 1e-4 && this.dirY === 0) this.velY = 0;
          this.baseYOffset += this.velY * dt;

          // зум
          var zv = this.zoomSmoothTime > 0 ? 1 - Math.exp(-dt / this.zoomSmoothTime) : 1;
          this.currentDistance += (this.targetDistance - this.currentDistance) * zv;
          this.applyTransform(dt);
        };
        _proto.applyTransform = function applyTransform(_dt) {
          var tgt = this.target.worldPosition;
          var yaw = this.yawDeg * Math.PI / 180;
          var offX = Math.sin(yaw) * this.currentDistance;
          var offZ = Math.cos(yaw) * this.currentDistance;
          var camPos = new Vec3(tgt.x + offX, tgt.y + this.baseYOffset, tgt.z + offZ);
          this.node.setWorldPosition(camPos);

          // смотрим в таргет (XZ), Y берём от камеры
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
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "startHeight", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "yawDeg", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "distance", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "minDistance", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "maxDistance", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 50;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "zoomStep", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "invertWheel", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "maxSpeed", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 8;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "moveSmoothTime", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.12;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "zoomSmoothTime", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.15;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GlobalClickManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ClickMoveBinding.ts', './InteractionState.ts', './UIScaleBounce.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Camera, input, Input, geometry, PhysicsSystem, Node, tween, Component, ClickMoveBinding, InteractionState, UIScaleBounce;
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
      input = module.input;
      Input = module.Input;
      geometry = module.geometry;
      PhysicsSystem = module.PhysicsSystem;
      Node = module.Node;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      ClickMoveBinding = module.ClickMoveBinding;
    }, function (module) {
      InteractionState = module.InteractionState;
    }, function (module) {
      UIScaleBounce = module.UIScaleBounce;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "4bd86blOoRLpq75wEwnh3v5", "GlobalClickManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var MOUSE_ID = -1;
      var GlobalClickManager3D = exports('GlobalClickManager3D', (_dec = ccclass('GlobalClickManager3D'), _dec2 = property({
        type: Camera
      }), _dec3 = property({
        tooltip: 'Смещение по оси X (или другой в ClickMoveBinding)'
      }), _dec4 = property({
        tooltip: 'Длительность перемещения 3D-объекта'
      }), _dec5 = property({
        type: UIScaleBounce,
        tooltip: 'UI-эффект, который откроется с баунсом после движения'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GlobalClickManager3D, _Component);
        function GlobalClickManager3D() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "sceneCamera", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "distanceX", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "duration", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "uiEffect", _descriptor4, _assertThisInitialized(_this));
          /** Последний активный кусочек (который выдвинули) */
          _this.lastBinding = null;
          /** Флаг блокировки взаимодействий, пока идёт анимация/открыт UI/задвижение */
          _this._locked = false;
          return _this;
        }
        var _proto = GlobalClickManager3D.prototype;
        _proto.onEnable = function onEnable() {
          input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          input.on(Input.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
          input.on(Input.EventType.MOUSE_UP, this.onMouseUp, this);
        };
        _proto.onDisable = function onDisable() {
          input.off(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          input.off(Input.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
          input.off(Input.EventType.MOUSE_UP, this.onMouseUp, this);
        };
        _proto.onTouchEnd = function onTouchEnd(e) {
          if (this._locked) return; // блокируем
          if (!this.sceneCamera) return;
          if (InteractionState.inGesture && InteractionState.source === 'mouse') return;
          var _InteractionState$try = InteractionState.tryEndGesture(e.getID(), 'touch'),
            ended = _InteractionState$try.ended,
            wasDragged = _InteractionState$try.wasDragged;
          if (!ended || wasDragged) return;
          var p = e.getLocation();
          this.raycastAndAct(p.x, p.y);
        };
        _proto.onTouchCancel = function onTouchCancel(e) {
          InteractionState.tryEndGesture(e.getID(), 'touch');
        };
        _proto.onMouseUp = function onMouseUp(e) {
          if (this._locked) return; // блокируем
          if (!this.sceneCamera || e.getButton() !== 0) return;
          if (InteractionState.inGesture && InteractionState.source === 'touch') return;
          var _InteractionState$try2 = InteractionState.tryEndGesture(MOUSE_ID, 'mouse'),
            ended = _InteractionState$try2.ended,
            wasDragged = _InteractionState$try2.wasDragged;
          if (!ended || wasDragged) return;
          var p = e.getLocation();
          this.raycastAndAct(p.x, p.y);
        }

        /** Рейкаст по экранной точке и запуск действий (перемещение + UI-эффект). */;
        _proto.raycastAndAct = function raycastAndAct(x, y) {
          var _this2 = this;
          if (this._locked) return; // безопасная проверка
          var ray = new geometry.Ray();
          this.sceneCamera.screenPointToRay(x, y, ray);
          if (PhysicsSystem.instance.raycastClosest(ray)) {
            var hit = PhysicsSystem.instance.raycastClosestResult;
            var n = hit.collider.node;
            while (n) {
              var b = n.getComponent(ClickMoveBinding);
              if (b && b.enabledInHierarchy) {
                // Ставим замок сразу, чтобы другие клики игнорились
                this._locked = true;
                this.lastBinding = b;

                // 1) выдвигаем кусочек (твоя логика)
                b.performMove(this.distanceX, this.duration);

                // 2) после длительности движения показываем UI с баунсом
                var delayTarget = b.target instanceof Node ? b.target : this.node;
                tween(delayTarget).delay(this.duration).call(function () {
                  var _this2$uiEffect;
                  (_this2$uiEffect = _this2.uiEffect) == null || _this2$uiEffect.playOpen();
                  // Остаёмся в locked-положении до явного закрытия UI и обратного движения
                }).start();
                return;
              }
              n = n.parent;
            }
          }
        }

        /** Вызвать при нажатии на кнопку "закрыть" UI:
         *  1) закрываем UI (scale → 0),
         *  2) задвигаем последний кусочек обратно,
         *  3) разблокируем взаимодействия по окончании задвижения.
         */;
        _proto.closeUIAndRetract = /*#__PURE__*/
        function () {
          var _closeUIAndRetract = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this3 = this;
            var delayTarget;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!this.uiEffect) {
                    _context.next = 3;
                    break;
                  }
                  _context.next = 3;
                  return this.uiEffect.playClose();
                case 3:
                  // 2) задвинуть кусочек назад
                  if (this.lastBinding) {
                    delayTarget = this.lastBinding.target instanceof Node ? this.lastBinding.target : this.node;
                    this.lastBinding.performMove(this.distanceX, this.duration);

                    // 3) снять замок по окончании задвижения
                    tween(delayTarget).delay(this.duration).call(function () {
                      _this3._locked = false;
                      _this3.lastBinding = null;
                    }).start();
                  } else {
                    // если по какой-то причине нет lastBinding — просто разблокируем
                    this._locked = false;
                  }
                case 4:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function closeUIAndRetract() {
            return _closeUIAndRetract.apply(this, arguments);
          }
          return closeUIAndRetract;
        }();
        return GlobalClickManager3D;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sceneCamera", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "distanceX", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "duration", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.25;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "uiEffect", [_dec5], {
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
        // ⚠️ новый флаг — жест уже завершён
        InteractionState.beginGesture = function beginGesture(id, source) {
          if (!this.inGesture) {
            this.inGesture = true;
            this.ended = false;
            this.activeId = id;
            this.source = source;
            this.draggedInGesture = false;
            this.isRotating = false;
          }
        };
        InteractionState.markDrag = function markDrag(id) {
          if (this.inGesture && !this.ended && this.activeId === id) {
            this.draggedInGesture = true;
            this.isRotating = true;
          }
        }

        /** Попытка завершить жест. Возвращает:
         *  { ended:true, wasDragged:boolean } — если это ПЕРВОЕ корректное завершение;
         *  { ended:false, wasDragged:false } — если это повторный end/левый источник (игнор).
         */;
        InteractionState.tryEndGesture = function tryEndGesture(id, source) {
          if (!this.inGesture || this.ended) return {
            ended: false,
            wasDragged: false
          };
          if (this.activeId !== id || this.source !== source) return {
            ended: false,
            wasDragged: false
          };
          var wasDragged = this.draggedInGesture;
          this.ended = true; // помечаем как завершённый — следующие end игнорим
          this.inGesture = false;
          this.activeId = null;
          this.source = null;
          this.draggedInGesture = false;
          this.isRotating = false;
          return {
            ended: true,
            wasDragged: wasDragged
          };
        };
        return InteractionState;
      }());
      InteractionState.inGesture = false;
      InteractionState.activeId = null;
      InteractionState.source = null;
      InteractionState.draggedInGesture = false;
      InteractionState.isRotating = false;
      InteractionState.ended = false;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./ClickMoveBinding.ts', './ColorLibrary.ts', './FreeCamera.ts', './GlobalClickManager.ts', './InteractionState.ts', './PieceSpawner.ts', './RotateYByKeys.ts', './StartApp.ts', './UIScaleBounce.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/PieceSpawner.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ColorLibrary.ts', './ClickMoveBinding.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, instantiate, Vec3, Component, ColorLibrary, ClickMoveBinding;
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
      ColorLibrary = module.ColorLibrary;
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
            if (binding != null && binding.meshRenderer && ColorLibrary.instance) {
              ColorLibrary.instance.applyRandomColor(binding.meshRenderer, this.colorUniform, this.materialIndex);
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

System.register("chunks:///_virtual/RotateYByKeys.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './InteractionState.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, input, Input, KeyCode, Component, InteractionState;
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
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "717452jV8ZDv7JZnElpm+X0", "RotateYByKeys", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var MOUSE_ID = -1;
      var RotateYByKeys = exports('RotateYByKeys', (_dec = ccclass('RotateYByKeys'), _dec2 = property({
        tooltip: 'Скорость вращения от клавиш (град/сек)'
      }), _dec3 = property({
        tooltip: 'Чувствительность драга: градусов на 1 пиксель'
      }), _dec4 = property({
        tooltip: 'Порог пикселей, после которого считаем жест drag'
      }), _dec5 = property({
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
          _initializerDefineProperty(_this, "invert", _descriptor4, _assertThisInitialized(_this));
          // <-- галочка в инспекторе
          // --- клавиатура
          _this.keyDir = 0;
          // --- тач
          _this.activeTouchId = null;
          _this.touchStartX = null;
          _this.touchLastX = null;
          // --- мышь
          _this.mouseHeld = false;
          _this.mouseStartX = null;
          _this.mouseLastX = null;
          return _this;
        }
        var _proto = RotateYByKeys.prototype;
        _proto.onEnable = function onEnable() {
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

        // ===== клавиатура =====
        ;

        _proto.onKeyDown = function onKeyDown(e) {
          if (e.keyCode === KeyCode.KEY_A) this.keyDir = -1;else if (e.keyCode === KeyCode.KEY_D) this.keyDir = 1;
        };
        _proto.onKeyUp = function onKeyUp(e) {
          if (e.keyCode === KeyCode.KEY_A && this.keyDir === -1 || e.keyCode === KeyCode.KEY_D && this.keyDir === 1) {
            this.keyDir = 0;
          }
        }

        // ===== тач =====
        ;

        _proto.onTouchStart = function onTouchStart(e) {
          var id = e.getID();
          if (!InteractionState.inGesture) {
            InteractionState.beginGesture(id, 'touch');
            this.activeTouchId = id;
            var x = e.getLocationX();
            this.touchStartX = x;
            this.touchLastX = x;
          }
        };
        _proto.onTouchMove = function onTouchMove(e) {
          var id = e.getID();
          if (this.activeTouchId !== id || this.touchLastX === null) return;
          var x = e.getLocationX();
          var dxInc = x - this.touchLastX;
          this.touchLastX = x;
          if (this.touchStartX !== null && Math.abs(this.touchStartX - x) >= this.dragThreshold) {
            InteractionState.markDrag(id);
          }
          if (dxInc !== 0) {
            var euler = this.node.eulerAngles;
            var sign = this.invert ? -1 : 1;
            euler.y += dxInc * this.degPerPixel * sign;
            this.node.setRotationFromEuler(euler);
          }
        };
        _proto.onTouchEnd = function onTouchEnd(e) {
          if (this.activeTouchId !== e.getID()) return;
          this.activeTouchId = null;
          this.touchStartX = this.touchLastX = null;
        };
        _proto.onTouchCancel = function onTouchCancel(e) {
          if (this.activeTouchId !== e.getID()) return;
          this.activeTouchId = null;
          this.touchStartX = this.touchLastX = null;
        }

        // ===== мышь =====
        ;

        _proto.onMouseDown = function onMouseDown(e) {
          if (e.getButton() !== 0) return;
          if (!InteractionState.inGesture) {
            InteractionState.beginGesture(MOUSE_ID, 'mouse');
            this.mouseHeld = true;
            var x = e.getLocationX();
            this.mouseStartX = x;
            this.mouseLastX = x;
          }
        };
        _proto.onMouseMove = function onMouseMove(e) {
          if (!this.mouseHeld || InteractionState.source !== 'mouse' || this.mouseLastX === null) return;
          var x = e.getLocationX();
          var dxInc = x - this.mouseLastX;
          this.mouseLastX = x;
          if (this.mouseStartX !== null && Math.abs(x - this.mouseStartX) >= this.dragThreshold) {
            InteractionState.markDrag(MOUSE_ID);
          }
          if (dxInc !== 0) {
            var euler = this.node.eulerAngles;
            var sign = this.invert ? -1 : 1;
            euler.y += dxInc * this.degPerPixel * sign;
            this.node.setRotationFromEuler(euler);
          }
        };
        _proto.onMouseUp = function onMouseUp(e) {
          if (e.getButton() !== 0) return;
          this.mouseHeld = false;
          this.mouseStartX = this.mouseLastX = null;
        }

        // ===== клавиатура =====
        ;

        _proto.update = function update(dt) {
          if (this.keyDir !== 0) {
            var euler = this.node.eulerAngles;
            var sign = this.invert ? -1 : 1;
            euler.y += this.rotateSpeed * this.keyDir * dt * sign;
            this.node.setRotationFromEuler(euler);
          }
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
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "invert", [_dec5], {
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