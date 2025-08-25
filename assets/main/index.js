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

System.register("chunks:///_virtual/main", ['./FreeCamera.ts', './PieceSpawner.ts', './RotateYByKeys.ts', './StartApp.ts'], function () {
  return {
    setters: [null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/PieceSpawner.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, instantiate, Vec3, Component;
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
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "afb06F8c6dL7IKM2pPDv/LO", "PieceSpawner", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PieceSpawner = exports('PieceSpawner', (_dec = ccclass('PieceSpawner'), _dec2 = property({
        type: Prefab
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
          // ������� ����� �������� ����������
          _initializerDefineProperty(_this, "objectsPerLevel", _descriptor3, _assertThisInitialized(_this));
          // ������� �������� �� �������
          _initializerDefineProperty(_this, "angleStep", _descriptor4, _assertThisInitialized(_this));
          // �� ������� ������������ ������ ����� ������
          _initializerDefineProperty(_this, "baseScale", _descriptor5, _assertThisInitialized(_this));
          // ��������� ����� ������� ������
          _initializerDefineProperty(_this, "levelScaleFactor", _descriptor6, _assertThisInitialized(_this));
          // �� ������� ��� ��������� ����� �� ������ ������ (0.9 = ����� 10%)
          _initializerDefineProperty(_this, "baseHeight", _descriptor7, _assertThisInitialized(_this));
          // ������������������ ������ ������� (��� scale = 1). ����� ��� ���� ������.
          _initializerDefineProperty(_this, "levelPadding", _descriptor8, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = PieceSpawner.prototype;
        // ���. ����� ����� �������� (�� ������� �� ������)
        _proto.start = function start() {
          this.spawnObjects();
        }

        /** ����� ����� ���������� ������� � ������ ������ (�������������� ����������) */;
        _proto.levelYOffset = function levelYOffset(level) {
          if (level <= 0) return 0;
          var H0 = this.baseHeight * this.baseScale; // ������ ������� ������
          var f = this.levelScaleFactor;
          var sumHeights = 0;
          if (Math.abs(1 - f) < 1e-6) {
            // ��� ����������: ������ level * H0
            sumHeights = level * H0;
          } else {
            // ����� H0 + H0*f + ... + H0*f^(level-1)
            sumHeights = H0 * (1 - Math.pow(f, level)) / (1 - f);
          }

          // ���� ������������� ����� ����� ��������
          return sumHeights + level * this.levelPadding;
        };
        _proto.spawnObjects = function spawnObjects() {
          if (!this.prefab) {
            console.warn('Prefab �� ��������!');
            return;
          }
          for (var i = 0; i < this.totalObjects; i++) {
            var level = Math.floor(i / this.objectsPerLevel);
            var scale = this.baseScale * Math.pow(this.levelScaleFactor, level);
            var obj = instantiate(this.prefab);
            obj.setParent(this.node);

            // �������: (0, y(level), 0) � y ������� �� ��������� ������ ���������� �������
            var y = this.levelYOffset(level);
            obj.setPosition(new Vec3(0, y, 0));

            // ���� �������� � �������� ������
            obj.setRotationFromEuler(new Vec3(0, i * this.angleStep, 0));

            // ����� ������
            obj.setScale(scale, scale, scale);
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
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RotateYByKeys.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, input, Input, KeyCode, Component;
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
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "717452jV8ZDv7JZnElpm+X0", "RotateYByKeys", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var RotateYByKeys = exports('RotateYByKeys', (_dec = ccclass('RotateYByKeys'), _dec2 = property({
        tooltip: '�������� �������� � ����/���'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RotateYByKeys, _Component);
        function RotateYByKeys() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "rotateSpeed", _descriptor, _assertThisInitialized(_this));
          _this.dir = 0;
          return _this;
        }
        var _proto = RotateYByKeys.prototype;
        // -1 = ����� (A), 1 = ������ (D)
        _proto.onEnable = function onEnable() {
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
        };
        _proto.onDisable = function onDisable() {
          input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
        };
        _proto.onKeyDown = function onKeyDown(e) {
          if (e.keyCode === KeyCode.KEY_A) this.dir = -1;else if (e.keyCode === KeyCode.KEY_D) this.dir = 1;
        };
        _proto.onKeyUp = function onKeyUp(e) {
          if (e.keyCode === KeyCode.KEY_A && this.dir === -1 || e.keyCode === KeyCode.KEY_D && this.dir === 1) {
            this.dir = 0;
          }
        };
        _proto.update = function update(dt) {
          if (this.dir !== 0) {
            // ���� ������� ���� � ��������� ����������
            var euler = this.node.eulerAngles.clone();
            euler.y += this.dir * this.rotateSpeed * dt;
            this.node.setRotationFromEuler(euler);
          }
        };
        return RotateYByKeys;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "rotateSpeed", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 90;
        }
      }), _class2)) || _class));
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