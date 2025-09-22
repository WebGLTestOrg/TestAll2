System.register("chunks:///_virtual/AddCake.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Component;
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
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "bf9e8dig6dG5784T9aSK/VS", "AddCake", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var CakeCreator = exports('CakeCreator', (_dec = ccclass('CakeCreator'), _dec2 = property({
        tooltip: '������ URL �� ��������� API (�������� �����)'
      }), _dec3 = property({
        tooltip: '����. id ������� (�������� 1..N)'
      }), _dec4 = property({
        tooltip: '��������� �� # ����� ������ (��� � ������� "#999999")'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CakeCreator, _Component);
        function CakeCreator() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "endpoint", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "maxFillingId", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "hexWithHash", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = CakeCreator.prototype;
        _proto.start = function start() {
          // ������������ ������� ��� ������
          this.createCake();
        };
        _proto.createCake = /*#__PURE__*/function () {
          var _createCake = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var payload, res, data;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (this.endpoint) {
                    _context.next = 3;
                    break;
                  }
                  console.error('�� ������ endpoint');
                  return _context.abrupt("return");
                case 3:
                  payload = {
                    user_id: this.uuidV4(),
                    // ����������, ������ UUID v4
                    hex_color: this.randHexColor(this.hexWithHash),
                    // ����������
                    // ���� � �� ������������ ����, �� �������� ��������
                    name: this.pickRandom(['����', '���', '����', '����', '����', '������', '���']),
                    title: this.pickRandom(['���������� ����', '���������� ����', '��������� ����', '������� ����', '����������� ����']),
                    greeting_text: this.pickRandom(['����������!', '������� � �������!', '����� ������� ������������...', '����� ���������� �����!', '������� �����!']),
                    filling_id: this.randInt(1, Math.max(1, Math.floor(this.maxFillingId))) // �����������
                    // file � �� ����������
                  };

                  _context.prev = 4;
                  _context.next = 7;
                  return fetch(this.endpoint, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                  });
                case 7:
                  res = _context.sent;
                  _context.next = 10;
                  return res.json()["catch"](function () {
                    return {};
                  });
                case 10:
                  data = _context.sent;
                  console.log('����� API:', data);
                  _context.next = 17;
                  break;
                case 14:
                  _context.prev = 14;
                  _context.t0 = _context["catch"](4);
                  console.error('������ ��� �������� �����:', _context.t0);
                case 17:
                case "end":
                  return _context.stop();
              }
            }, _callee, this, [[4, 14]]);
          }));
          function createCake() {
            return _createCake.apply(this, arguments);
          }
          return createCake;
        }() // ===== ������� =====
        ;

        _proto.pickRandom = function pickRandom(arr) {
          return arr[Math.floor(Math.random() * arr.length)];
        };
        _proto.randInt = function randInt(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        _proto.randHexColor = function randHexColor(withHash) {
          if (withHash === void 0) {
            withHash = true;
          }
          var hex = '0123456789ABCDEF';
          var out = withHash ? '#' : '';
          for (var i = 0; i < 6; i++) out += hex[Math.floor(Math.random() * 16)];
          return out;
        };
        _proto.uuidV4 = function uuidV4() {
          if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
            return crypto.randomUUID();
          }
          // �������� ��� padStart
          var bytes = [];
          for (var i = 0; i < 16; i++) bytes.push(Math.floor(Math.random() * 256));
          bytes[6] = bytes[6] & 0x0f | 0x40; // version 4
          bytes[8] = bytes[8] & 0x3f | 0x80; // variant

          var b2h = function b2h(b) {
            var s = b.toString(16);
            return s.length === 1 ? '0' + s : s;
          };
          var hex = bytes.map(b2h).join('');
          return hex.slice(0, 8) + '-' + hex.slice(8, 12) + '-' + hex.slice(12, 16) + '-' + hex.slice(16, 20) + '-' + hex.slice(20);
        };
        return CakeCreator;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "endpoint", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "maxFillingId", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "hexWithHash", [_dec4], {
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

System.register("chunks:///_virtual/ArcTextColorTest.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ClickMoveBinding.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Color, input, Input, KeyCode, Component, MeshRenderer, ClickMoveBinding;
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
      Color = module.Color;
      input = module.input;
      Input = module.Input;
      KeyCode = module.KeyCode;
      Component = module.Component;
      MeshRenderer = module.MeshRenderer;
    }, function (module) {
      ClickMoveBinding = module.ClickMoveBinding;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "45ffd3LcStA75zu5Z71uxN/", "ArcTextColorTest", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ArcTextColorTest = exports('ArcTextColorTest', (_dec = ccclass('ArcTextColorTest'), _dec2 = property({
        type: ClickMoveBinding
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ArcTextColorTest, _Component);
        function ArcTextColorTest() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "binding", _descriptor, _assertThisInitialized(_this));
          // какие цвета ставим
          _this.startColor = new Color(255, 0, 0, 255);
          // красный на старте
          _this.keyColor = new Color(0, 255, 0, 255);
          return _this;
        }
        var _proto = ArcTextColorTest.prototype;
        // зелёный на P
        _proto.start = /*#__PURE__*/
        function () {
          var _start = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
                  _context.next = 3;
                  return this.applyWhenReady();
                case 3:
                  // дождёмся материалов
                  this.setBoth(this.startColor); // и покрасим
                  console.log('[ArcTextColorTest] старт: покрасили в красный');
                case 5:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function start() {
            return _start.apply(this, arguments);
          }
          return start;
        }();
        _proto.onDestroy = function onDestroy() {
          input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        };
        _proto.onKeyDown = function onKeyDown(e) {
          if (e.keyCode === KeyCode.KEY_P) {
            this.setBoth(this.keyColor);
            console.log('[ArcTextColorTest] P: покрасили в зелёный');
          }
        }

        // ===== helpers =====
        ;

        _proto.setBoth = function setBoth(c) {
          var _this$binding;
          var t = (_this$binding = this.binding) == null ? void 0 : _this$binding.arcText;
          if (!t) return;
          t.setTextColors(c, c);
        }

        /** Ждём, пока у arcText появятся материал-инстансы (или собираем их сами). */;
        _proto.applyWhenReady = /*#__PURE__*/
        function () {
          var _applyWhenReady = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _this$binding2;
            var t, wasEnabled, mr, tries;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  t = (_this$binding2 = this.binding) == null ? void 0 : _this$binding2.arcText;
                  if (t) {
                    _context2.next = 3;
                    break;
                  }
                  return _context2.abrupt("return");
                case 3:
                  // если компонент выключен из-за freezeAfterBuild — временно включим
                  wasEnabled = t.enabled;
                  if (!wasEnabled) t.enabled = true;

                  // если у MeshRenderer ещё нет инстансов — инициируем сборку
                  mr = t.node.getComponent(MeshRenderer);
                  if (!(mr && (!mr.getMaterialInstance(0) || t.text2 && !mr.getMaterialInstance(1)))) {
                    _context2.next = 10;
                    break;
                  }
                  // форсим сборку и ждём кадр
                  t.rebuildNow == null || t.rebuildNow();
                  _context2.next = 10;
                  return this.nextFrame();
                case 10:
                  // если всё ещё нет — подождём пару кадров (редкие случаи гонок)
                  tries = 6;
                // ~100 мс
                case 11:
                  if (!(tries-- > 0)) {
                    _context2.next = 18;
                    break;
                  }
                  if (!(mr != null && mr.getMaterialInstance(0))) {
                    _context2.next = 14;
                    break;
                  }
                  return _context2.abrupt("break", 18);
                case 14:
                  _context2.next = 16;
                  return this.nextFrame();
                case 16:
                  _context2.next = 11;
                  break;
                case 18:
                  // вернём исходное состояние enabled при необходимости
                  if (!wasEnabled && t.freezeAfterBuild) t.enabled = false;
                case 19:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function applyWhenReady() {
            return _applyWhenReady.apply(this, arguments);
          }
          return applyWhenReady;
        }();
        _proto.nextFrame = function nextFrame() {
          var _this2 = this;
          return new Promise(function (res) {
            return _this2.scheduleOnce(function () {
              return res();
            }, 0);
          });
        };
        return ArcTextColorTest;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "binding", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ArcTextMesh.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _createClass, cclegacy, _decorator, Enum, JsonAsset, Texture2D, Material, Color, Layers, MeshRenderer, gfx, Mesh, math, Vec3, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      JsonAsset = module.JsonAsset;
      Texture2D = module.Texture2D;
      Material = module.Material;
      Color = module.Color;
      Layers = module.Layers;
      MeshRenderer = module.MeshRenderer;
      gfx = module.gfx;
      Mesh = module.Mesh;
      math = module.math;
      Vec3 = module.Vec3;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34;
      cclegacy._RF.push({}, "28184xX3rNPcJTTJ6RRKcou", "ArcTextMesh", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        executeInEditMode = _decorator.executeInEditMode,
        disallowMultiple = _decorator.disallowMultiple;
      var ArcPlane = /*#__PURE__*/function (ArcPlane) {
        ArcPlane[ArcPlane["XY"] = 0] = "XY";
        ArcPlane[ArcPlane["XZ"] = 1] = "XZ";
        ArcPlane[ArcPlane["YZ"] = 2] = "YZ";
        return ArcPlane;
      }(ArcPlane || {});
      Enum(ArcPlane);
      var ArcAlign = /*#__PURE__*/function (ArcAlign) {
        ArcAlign[ArcAlign["Left"] = 0] = "Left";
        ArcAlign[ArcAlign["Center"] = 1] = "Center";
        ArcAlign[ArcAlign["Right"] = 2] = "Right";
        return ArcAlign;
      }(ArcAlign || {});
      Enum(ArcAlign);
      var ArcBend = /*#__PURE__*/function (ArcBend) {
        ArcBend[ArcBend["Convex"] = 1] = "Convex";
        ArcBend[ArcBend["Concave"] = -1] = "Concave";
        return ArcBend;
      }(ArcBend || {});
      Enum(ArcBend);
      var BendMode = /*#__PURE__*/function (BendMode) {
        BendMode[BendMode["Radius"] = 0] = "Radius";
        BendMode[BendMode["ArcAngle"] = 1] = "ArcAngle";
        return BendMode;
      }(BendMode || {});
      Enum(BendMode);
      var ArcTextMSDFOneLine = exports('ArcTextMSDFOneLine', (_dec = ccclass('ArcTextMSDFOneLine'), _dec2 = executeInEditMode(), _dec3 = disallowMultiple(), _dec4 = property({
        type: JsonAsset
      }), _dec5 = property({
        type: Texture2D
      }), _dec6 = property({
        type: Material
      }), _dec7 = property({
        type: Color
      }), _dec8 = property({
        tooltip: 'true → взять pxRange из JSON'
      }), _dec9 = property({
        tooltip: 'Если useJsonPxRange=false'
      }), _dec10 = property({
        tooltip: 'Глобальная мягкость края'
      }), _dec11 = property({
        tooltip: 'Отсечь ореол'
      }), _dec12 = property({
        tooltip: 'Мин. толщина края (px) при даунскейле'
      }), _dec13 = property({
        tooltip: 'Гейт усиления AA'
      }), _dec14 = property({
        tooltip: 'Поддуть заливку (px)'
      }), _dec15 = property({
        type: BendMode
      }), _dec16 = property({
        type: ArcPlane
      }), _dec17 = property({
        type: ArcAlign
      }), _dec18 = property({
        type: ArcBend
      }), _dec19 = property({
        slide: true,
        range: [2, 64],
        step: 1
      }), _dec20 = property({
        slide: true,
        range: [1, 32],
        step: 1
      }), _dec21 = property({
        slide: true,
        range: [1, 128],
        step: 1
      }), _dec22 = property({
        slide: true,
        range: [0, 240],
        step: 1
      }), _dec23 = property({
        tooltip: 'Поставь true → пересборка прямо сейчас'
      }), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ArcTextMSDFOneLine, _Component);
        function ArcTextMSDFOneLine() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          // ---- шрифт/вход
          _initializerDefineProperty(_this, "text", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "fontJson", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "atlas", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "material", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pixelScale", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spacingScale", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "color", _descriptor7, _assertThisInitialized(_this));
          // ---- UV ориентация
          _initializerDefineProperty(_this, "invertV", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mirrorX", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mirrorY", _descriptor10, _assertThisInitialized(_this));
          // ---- ПАРАМЕТРЫ ШЕЙДЕРА (единый источник — компонент)
          _initializerDefineProperty(_this, "useJsonPxRange", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pxRangeOverride", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "msdfSoftness", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "alphaClip", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "minAAMinPx", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "minifyGate", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "fillBiasPx", _descriptor17, _assertThisInitialized(_this));
          // ---- геометрия дуги
          _initializerDefineProperty(_this, "bendMode", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "radius", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arcAngleDeg", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "plane", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "align", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bend", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "faceOutward", _descriptor24, _assertThisInitialized(_this));
          // фикс-радиус/отступ
          _initializerDefineProperty(_this, "lockRadius", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "fixedRadius", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pushAlongNormal", _descriptor27, _assertThisInitialized(_this));
          // сегментация
          _initializerDefineProperty(_this, "segmentWidthPx", _descriptor28, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "minSegmentsPerGlyph", _descriptor29, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "maxSegmentsPerGlyph", _descriptor30, _assertThisInitialized(_this));
          // поведение
          _initializerDefineProperty(_this, "editorLiveUpdate", _descriptor31, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "buildOnStart", _descriptor32, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "freezeAfterBuild", _descriptor33, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "maxRebuildRate", _descriptor34, _assertThisInitialized(_this));
          // Force_Rebuild
          _this._force = false;
          // внутреннее
          _this._lastSig = '';
          _this._queued = false;
          _this._lastAt = 0;
          _this._lastMI = null;
          // слежение за пересозданием MI
          _this._lastMIHash = 0;
          _this._fontCache = new Map();
          return _this;
        }
        var _proto = ArcTextMSDFOneLine.prototype;
        // ===== lifecycle
        _proto.onLoad = function onLoad() {
          this.node.layer = 1 << Layers.Enum.DEFAULT;
          if (!this.node.getComponent(MeshRenderer)) this.node.addComponent(MeshRenderer);
          this._applyToCurrentMI();
        };
        _proto.start = function start() {
          if (this.buildOnStart) {
            this.rebuildNow(true);
            if (this.freezeAfterBuild) this.enabled = false;
          }
        };
        _proto.onValidate = function onValidate() {
          // мгновенно пробрасываем юниформы (без ребилда)
          this._applyToCurrentMI();
        }

        // ===== Editor Live Update — сторож
        ;

        _proto.update = function update() {
          return;
        }

        // ===== пересборка
        ;

        _proto._signature = function _signature() {
          var _uuid, _this$fontJson, _uuid2, _this$material;
          var jj = (_uuid = (_this$fontJson = this.fontJson) == null ? void 0 : _this$fontJson.uuid) != null ? _uuid : '0';
          var aa = this._texSig(this.atlas);
          var mm = (_uuid2 = (_this$material = this.material) == null ? void 0 : _this$material.uuid) != null ? _uuid2 : '0';
          return [this.text, jj, aa, mm, this.pixelScale, this.spacingScale, this.invertV, this.mirrorX, this.mirrorY, this.useJsonPxRange ? 'J' : this.pxRangeOverride, this.msdfSoftness, this.alphaClip, this.minAAMinPx, this.minifyGate, this.fillBiasPx, this.bendMode, this.radius, this.arcAngleDeg, this.plane, this.align, this.bend, this.faceOutward, this.lockRadius, this.fixedRadius, this.pushAlongNormal, this.segmentWidthPx, this.minSegmentsPerGlyph, this.maxSegmentsPerGlyph].join('|');
        };
        _proto._texSig = function _texSig(t) {
          var _ref, _format;
          if (!t) return '0';
          var f = (_ref = (_format = t._format) != null ? _format : t.format) != null ? _ref : 'fmt';
          return t.width + "x" + t.height + ":" + f;
        };
        _proto._requestRebuild = function _requestRebuild() {
          var _globalThis$performan3,
            _globalThis$performan4,
            _this2 = this;
          if (this._queued) return;
          this._queued = true;
          var now = (_globalThis$performan3 = (_globalThis$performan4 = globalThis.performance) == null || _globalThis$performan4.now == null ? void 0 : _globalThis$performan4.now()) != null ? _globalThis$performan3 : Date.now();
          var delay = this.maxRebuildRate > 0 ? Math.max(0, this._lastAt + 1000 / this.maxRebuildRate - now) : 0;
          if (delay <= 0) this.scheduleOnce(function () {
            _this2._queued = false;
            _this2.rebuildNow();
          }, 0);else setTimeout(function () {
            if (_this2.isValid) _this2.scheduleOnce(function () {
              _this2._queued = false;
              _this2.rebuildNow();
            }, 0);
          }, delay);
        };
        _proto.rebuildNow = function rebuildNow(ignore) {
          var _globalThis$performan5, _globalThis$performan6;
          if (ignore === void 0) {
            ignore = false;
          }
          var sig = this._signature();
          if (!ignore && sig === this._lastSig) return;
          this._build();
          this._lastSig = sig;
          this._lastAt = (_globalThis$performan5 = (_globalThis$performan6 = globalThis.performance) == null || _globalThis$performan6.now == null ? void 0 : _globalThis$performan6.now()) != null ? _globalThis$performan5 : Date.now();
        }

        // ===== сборка меша (как в рабочей версии)
        ;

        _proto._build = function _build() {
          var mr = this.node.getComponent(MeshRenderer);
          if (!this.text || !this.fontJson || !this.atlas || !this.material) {
            mr.mesh = null;
            mr.materials = [];
            return;
          }
          var geo = this._buildLine(this.text, this.fontJson, this.atlas, this.pixelScale, this.spacingScale);
          var stride = 8 * 4,
            vc = geo.positions.length / 3;
          var ab = new ArrayBuffer(vc * stride);
          var f32 = new Float32Array(ab);
          for (var i = 0; i < vc; i++) {
            var _geo$normals, _geo$normals2, _geo$normals3, _geo$uvs, _geo$uvs2;
            var d = i * 8;
            f32[d] = geo.positions[i * 3];
            f32[d + 1] = geo.positions[i * 3 + 1];
            f32[d + 2] = geo.positions[i * 3 + 2];
            f32[d + 3] = (_geo$normals = geo.normals[i * 3]) != null ? _geo$normals : 0;
            f32[d + 4] = (_geo$normals2 = geo.normals[i * 3 + 1]) != null ? _geo$normals2 : 0;
            f32[d + 5] = (_geo$normals3 = geo.normals[i * 3 + 2]) != null ? _geo$normals3 : 1;
            f32[d + 6] = (_geo$uvs = geo.uvs[i * 2]) != null ? _geo$uvs : 0;
            f32[d + 7] = (_geo$uvs2 = geo.uvs[i * 2 + 1]) != null ? _geo$uvs2 : 0;
          }
          var vb = new Uint8Array(ab);
          var ib = new Uint8Array(new Uint32Array(geo.indices).buffer);
          var joined = new Uint8Array(vb.byteLength + ib.byteLength);
          joined.set(vb, 0);
          joined.set(ib, vb.byteLength);
          var vbOffset = 0,
            ibOffset = vb.byteLength;
          var attrs = [new gfx.Attribute(gfx.AttributeName.ATTR_POSITION, gfx.Format.RGB32F, false, 0, false, 0), new gfx.Attribute(gfx.AttributeName.ATTR_NORMAL, gfx.Format.RGB32F, false, 0, false, 1), new gfx.Attribute(gfx.AttributeName.ATTR_TEX_COORD, gfx.Format.RG32F, false, 0, false, 2)];
          var mesh = new Mesh();
          mesh.reset({
            struct: {
              vertexBundles: [{
                attributes: attrs,
                view: {
                  offset: vbOffset,
                  length: vb.byteLength,
                  count: vc,
                  stride: stride
                }
              }],
              primitives: [{
                primitiveMode: gfx.PrimitiveMode.TRIANGLE_LIST,
                vertexBundelIndices: [0],
                indexView: {
                  offset: ibOffset,
                  length: ib.byteLength,
                  count: geo.indices.length,
                  stride: 4
                }
              }],
              minPosition: geo.minPos,
              maxPosition: geo.maxPos
            },
            data: joined
          });
          mr.mesh = mesh;
          mr.materials = [this.material];
          this._applyToCurrentMI(); // пробросить юниформы сразу после ребилда
        };

        _proto._applyToCurrentMI = function _applyToCurrentMI() {
          var mr = this.node.getComponent(MeshRenderer);
          if (!mr) return;
          var mi = mr.getMaterialInstance(0);
          if (!mi) return;
          this._applyMatProps(mi, this.fontJson, this.atlas, this.color);
        }

        // ===== геометрия (без изменений)
        ;

        _proto._buildLine = function _buildLine(text, json, atlas, pixelScale, spacingScale) {
          var _fd$common$base,
            _this3 = this;
          var fd = this._getFont(json);
          var glyph = fd.glyphMap,
            kern = fd.kernMap;
          var kernPx = function kernPx(a, b) {
            var _kern$get;
            return (_kern$get = kern.get(a << 16 | b)) != null ? _kern$get : 0;
          };
          var S = Math.max(1e-4, pixelScale);
          var texW = Math.max(1, atlas.width),
            texH = Math.max(1, atlas.height);
          var base = (_fd$common$base = fd.common.base) != null ? _fd$common$base : Math.round((fd.common.lineHeight || 0) * 0.5);
          var baselineY = base * S;
          var infos = [];
          var penX = 0,
            minX = 1e9,
            maxX = -1e9;
          var codes = [];
          for (var _iterator = _createForOfIteratorHelperLoose(text), _step; !(_step = _iterator()).done;) {
            var ch = _step.value;
            codes.push(ch.codePointAt(0));
          }
          for (var i = 0; i < codes.length; i++) {
            var _glyph$get;
            var g = (_glyph$get = glyph.get(codes[i])) != null ? _glyph$get : glyph.get(63);
            if (!g) continue;
            var adv = (g.xadvance + (i > 0 ? kernPx(codes[i - 1], g.id) : 0)) * S * spacingScale;
            var left = penX + g.xoffset * S,
              right = left + g.width * S;
            var yTop = (base - g.yoffset) * S,
              yBot = yTop - g.height * S;
            infos.push({
              g: g,
              left: left,
              right: right,
              yTop: yTop,
              yBot: yBot
            });
            if (left < minX) minX = left;
            if (right > maxX) maxX = right;
            penX += adv;
          }
          var span = Math.max(1e-4, maxX - minX);
          var totalArc = 0,
            R = this.radius;
          if (this.lockRadius) {
            R = Math.max(1e-3, this.fixedRadius);
            totalArc = span / R;
          } else if (this.bendMode === BendMode.Radius) {
            R = Math.max(1e-3, this.radius);
            totalArc = span / R;
          } else {
            var a = math.toRadian(this.arcAngleDeg);
            totalArc = Math.max(0, a);
            R = totalArc < 1e-6 ? 1e12 : span / totalArc;
          }
          var startAngle = 0;
          if (this.align === ArcAlign.Center) startAngle = -totalArc / 2;else if (this.align === ArcAlign.Right) startAngle = -totalArc;
          var sign = this.bend === ArcBend.Convex ? 1 : -1;
          var C0 = new Vec3(),
            C1 = new Vec3();
          var Q0 = new math.Quat(),
            Q1 = new math.Quat();
          var pointOnArc = function pointOnArc(t, r, out) {
            switch (_this3.plane) {
              case ArcPlane.XY:
                out.set(Math.cos(t) * r, Math.sin(t) * r, 0);
                break;
              case ArcPlane.XZ:
                out.set(Math.cos(t) * r, 0, Math.sin(t) * r);
                break;
              case ArcPlane.YZ:
                out.set(0, Math.cos(t) * r, Math.sin(t) * r);
                break;
            }
          };
          var rotDeg = function rotDeg(deg, out) {
            var add = _this3.faceOutward ? 90 : 0;
            switch (_this3.plane) {
              case ArcPlane.XY:
                math.Quat.fromEuler(out, 0, 0, deg + add);
                break;
              case ArcPlane.XZ:
                math.Quat.fromEuler(out, 0, -(deg + add), 0);
                break;
              case ArcPlane.YZ:
                math.Quat.fromEuler(out, deg + add, 0, 0);
                break;
            }
          };
          var anchor = totalArc < 1e-6 ? new Vec3(minX + span * 0.5, baselineY, 0) : function () {
            var a = new Vec3();
            pointOnArc((startAngle + totalArc * 0.5) * sign, R, a);
            return a;
          }();
          var baseN = this.plane === ArcPlane.XY ? new Vec3(0, 0, 1) : this.plane === ArcPlane.XZ ? new Vec3(0, 1, 0) : new Vec3(1, 0, 0);
          var n0 = new Vec3(),
            n1 = new Vec3();
          var positions = [],
            normals = [],
            uvs = [],
            indices = [];
          var lt = new Vec3(),
            lb = new Vec3(),
            rt = new Vec3(),
            rb = new Vec3();
          var pv0 = new Vec3(),
            pv1 = new Vec3();
          var offN = this.pushAlongNormal;
          for (var _i = 0, _infos = infos; _i < _infos.length; _i++) {
            var inf = _infos[_i];
            var _g = inf.g,
              gw = Math.max(1e-4, _g.width * S);
            var cols = Math.ceil(_g.width / Math.max(1, Math.floor(this.segmentWidthPx)));
            cols = Math.max(this.minSegmentsPerGlyph, Math.min(this.maxSegmentsPerGlyph, cols));
            for (var ci = 0; ci < cols; ci++) {
              var t0 = ci / cols,
                t1 = (ci + 1) / cols;
              var gx0 = inf.left + gw * t0,
                gx1 = inf.left + gw * t1;
              var th0 = (startAngle + (gx0 - minX) / span * totalArc) * sign;
              var th1 = (startAngle + (gx1 - minX) / span * totalArc) * sign;
              pointOnArc(th0, R, C0);
              pointOnArc(th1, R, C1);
              rotDeg(math.toDegree(th0), Q0);
              rotDeg(math.toDegree(th1), Q1);
              pv0.set(gx0, baselineY, 0);
              pv1.set(gx1, baselineY, 0);
              lt.set(gx0, inf.yTop, 0);
              lb.set(gx0, inf.yBot, 0);
              rt.set(gx1, inf.yTop, 0);
              rb.set(gx1, inf.yBot, 0);
              var p0 = new Vec3(lt.x - pv0.x, lt.y - pv0.y, 0);
              Vec3.transformQuat(p0, p0, Q0);
              p0.add(C0).subtract(anchor);
              var p3 = new Vec3(lb.x - pv0.x, lb.y - pv0.y, 0);
              Vec3.transformQuat(p3, p3, Q0);
              p3.add(C0).subtract(anchor);
              var p1 = new Vec3(rt.x - pv1.x, rt.y - pv1.y, 0);
              Vec3.transformQuat(p1, p1, Q1);
              p1.add(C1).subtract(anchor);
              var p2 = new Vec3(rb.x - pv1.x, rb.y - pv1.y, 0);
              Vec3.transformQuat(p2, p2, Q1);
              p2.add(C1).subtract(anchor);
              Vec3.transformQuat(n0, baseN, Q0);
              Vec3.transformQuat(n1, baseN, Q1);
              if (offN !== 0) {
                p0.x += n0.x * offN;
                p0.y += n0.y * offN;
                p0.z += n0.z * offN;
                p1.x += n1.x * offN;
                p1.y += n1.y * offN;
                p1.z += n1.z * offN;
                p2.x += n1.x * offN;
                p2.y += n1.y * offN;
                p2.z += n1.z * offN;
                p3.x += n0.x * offN;
                p3.y += n0.y * offN;
                p3.z += n0.z * offN;
              }

              // UV (BMFont.y от ВЕРХА)
              var u0 = (_g.x + _g.width * t0) / texW;
              var u1 = (_g.x + _g.width * t1) / texW;
              var v0 = _g.y / texH; // верх
              var v1 = (_g.y + _g.height) / texH; // низ
              if (this.invertV) {
                var tv = v0;
                v0 = v1;
                v1 = tv;
              }
              if (this.mirrorX) {
                var tu = u0;
                u0 = u1;
                u1 = tu;
              }
              if (this.mirrorY) {
                var _tv = v0;
                v0 = v1;
                v1 = _tv;
              }
              var baseIdx = positions.length / 3;
              positions.push(p0.x, p0.y, p0.z, p1.x, p1.y, p1.z, p2.x, p2.y, p2.z, p3.x, p3.y, p3.z);
              normals.push(n0.x, n0.y, n0.z, n1.x, n1.y, n1.z, n1.x, n1.y, n1.z, n0.x, n0.y, n0.z);
              uvs.push(u0, v0, u1, v0, u1, v1, u0, v1);
              indices.push(baseIdx, baseIdx + 1, baseIdx + 2, baseIdx, baseIdx + 2, baseIdx + 3);
            }
          }
          var min = new Vec3(1e9, 1e9, 1e9),
            max = new Vec3(-1e9, -1e9, -1e9);
          for (var _i2 = 0; _i2 < positions.length; _i2 += 3) {
            var x = positions[_i2],
              y = positions[_i2 + 1],
              z = positions[_i2 + 2];
            if (x < min.x) min.x = x;
            if (y < min.y) min.y = y;
            if (z < min.z) min.z = z;
            if (x > max.x) max.x = x;
            if (y > max.y) max.y = y;
            if (z > max.z) max.z = z;
          }
          return {
            positions: positions,
            normals: normals,
            uvs: uvs,
            indices: indices,
            minPos: min,
            maxPos: max
          };
        };
        _proto.applyApiData = function applyApiData(payload) {
          var pickText = function pickText(o) {
            if (!o || typeof o !== 'object') return null;
            var keys = ['text', 'value', 'label', 'name', 'title'];
            for (var _i3 = 0, _keys = keys; _i3 < _keys.length; _i3++) {
              var k = _keys[_i3];
              var v = o[k];
              if (v != null) return String(v);
            }
            return null;
          };
          var next = null;
          if (payload == null) {
            next = '';
          } else if (typeof payload === 'string' || typeof payload === 'number' || typeof payload === 'boolean') {
            next = String(payload);
          } else if (Array.isArray(payload)) {
            next = payload.map(function (item) {
              if (item == null) return '';
              if (typeof item === 'string' || typeof item === 'number' || typeof item === 'boolean') return String(item);
              var picked = pickText(item);
              return picked != null ? picked : String(item);
            }).join('');
          } else if (typeof payload === 'object') {
            var _pickText;
            next = (_pickText = pickText(payload)) != null ? _pickText : String(payload);
          }
          if (next == null) return false;

          // Нормализуем переводы строк и убираем лишние невидимые символы по краям
          next = next.replace(/\r\n/g, '\n').trim();
          if (this.text === next) return false;
          this.text = next;
          this._requestRebuild();
          return true;
        };
        _proto._applyMatProps = function _applyMatProps(mi, json, atlas, color) {
          // ---- читаем декларацию свойств напрямую из эффекта ----
          var hasPropInEffect = function hasPropInEffect(mat, name) {
            var _ea$techniques, _ref2, _techIdx, _ea$techniques$techId, _tech$passes;
            var ea = mat.effectAsset;
            if (!(ea != null && (_ea$techniques = ea.techniques) != null && _ea$techniques.length)) return false;

            // текущий индекс техники: в разных минорках по-разному
            var techIdx = (_ref2 = (_techIdx = mat._techIdx) != null ? _techIdx : mat.technique) != null ? _ref2 : 0;
            var tech = (_ea$techniques$techId = ea.techniques[techIdx]) != null ? _ea$techniques$techId : ea.techniques[0];
            if (!(tech != null && (_tech$passes = tech.passes) != null && _tech$passes.length)) return false;

            // проходим по пассам и смотрим, объявлено ли свойство в "properties"
            for (var _iterator2 = _createForOfIteratorHelperLoose(tech.passes), _step2; !(_step2 = _iterator2()).done;) {
              var p = _step2.value;
              var props = p == null ? void 0 : p.properties;
              if (props && Object.prototype.hasOwnProperty.call(props, name)) return true;
            }
            return false;
          };
          var setIfDeclared = function setIfDeclared(name, value) {
            if (!hasPropInEffect(mi, name)) return false; // <- главная защита от "illegal property name"
            try {
              mi.setProperty(name, value);
              return true;
            } catch (_unused) {
              return false;
            }
          };

          // ---- значения (pxRange из JSON, если включено) ----
          var px = this.pxRangeOverride;
          if (this.useJsonPxRange && json) {
            var fd = this._getFont(json);
            if ((fd == null ? void 0 : fd.distanceRange) != null) px = fd.distanceRange;
          }

          // ---- проставляем только то, что реально объявлено в .effect/.shader ----
          if (atlas) setIfDeclared('mainTexture', atlas);
          setIfDeclared('tintColor', this.color); // Color объект ок — движок сам сведёт к vec4

          setIfDeclared('pxRange', px);
          setIfDeclared('softness', this.msdfSoftness);
          setIfDeclared('alphaClip', this.alphaClip);
          setIfDeclared('minAAMinPx', this.minAAMinPx);
          setIfDeclared('minifyGate', this.minifyGate);
          setIfDeclared('fillBiasPx', this.fillBiasPx);
        }

        // ===== шрифт
        ;

        _proto._getFont = function _getFont(json) {
          var _uuid3, _data$distanceField;
          if (!json) return null;
          var id = (_uuid3 = json.uuid) != null ? _uuid3 : String(json);
          var cached = this._fontCache.get(id);
          if (cached) return cached;
          var data = json.json;
          var glyphMap = new Map();
          if (Array.isArray(data.chars)) {
            for (var _iterator3 = _createForOfIteratorHelperLoose(data.chars), _step3; !(_step3 = _iterator3()).done;) {
              var g = _step3.value;
              glyphMap.set(g.id, g);
            }
          } else for (var k in data.chars) glyphMap.set(Number(k), data.chars[k]);
          var kernMap = new Map();
          if (Array.isArray(data.kernings)) {
            for (var _iterator4 = _createForOfIteratorHelperLoose(data.kernings), _step4; !(_step4 = _iterator4()).done;) {
              var _k = _step4.value;
              kernMap.set(_k.first << 16 | _k.second, _k.amount);
            }
          } else if (data.kernings) for (var _k2 in data.kernings) kernMap.set(Number(_k2), data.kernings[_k2]);
          var pack = {
            glyphMap: glyphMap,
            kernMap: kernMap,
            common: data.common,
            distanceRange: (_data$distanceField = data.distanceField) == null ? void 0 : _data$distanceField.distanceRange
          };
          this._fontCache.set(id, pack);
          return pack;
        }

        // удобные сеттеры
        ;

        _proto.setText = function setText(t) {
          this.text = t != null ? t : '';
          this._requestRebuild();
        };
        _proto.setColor = function setColor(c) {
          this.color = c;
          this._applyToCurrentMI();
        };
        _createClass(ArcTextMSDFOneLine, [{
          key: "Force_Rebuild",
          get: function get() {
            return this._force;
          },
          set: function set(v) {
            if (v) this.rebuildNow(true);
            this._force = false;
          }
        }]);
        return ArcTextMSDFOneLine;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "text", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'Текст';
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "fontJson", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "atlas", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "material", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "pixelScale", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.0;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "spacingScale", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.0;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "color", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(255, 255, 255, 255);
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "invertV", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "mirrorX", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "mirrorY", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "useJsonPxRange", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "pxRangeOverride", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 4.0;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "msdfSoftness", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.25;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "alphaClip", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.04;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "minAAMinPx", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.75;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "minifyGate", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.15;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "fillBiasPx", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.00;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "bendMode", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return BendMode.ArcAngle;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "radius", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "arcAngleDeg", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 40;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "plane", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return ArcPlane.XZ;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "align", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return ArcAlign.Center;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "bend", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return ArcBend.Concave;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "faceOutward", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "lockRadius", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "fixedRadius", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 200;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "pushAlongNormal", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "segmentWidthPx", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "minSegmentsPerGlyph", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "maxSegmentsPerGlyph", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 6;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "editorLiveUpdate", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "buildOnStart", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "freezeAfterBuild", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "maxRebuildRate", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 60;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "Force_Rebuild", [_dec23], Object.getOwnPropertyDescriptor(_class2.prototype, "Force_Rebuild"), _class2.prototype)), _class2)) || _class) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AutoScaleCameraPosition.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Vec3, Size, view, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec3 = module.Vec3;
      Size = module.Size;
      view = module.view;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "127bfVhJ3NP/LBgnQxROUZd", "AutoScaleCameraPosition", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var AutoScaleCameraZ_OnResizeOnly = exports('AutoScaleCameraZ_OnResizeOnly', (_dec = ccclass('AutoScaleCameraZ_OnResizeOnly'), _dec2 = property({
        tooltip: 'Опционально для логов'
      }), _dec3 = property({
        tooltip: 'Агрегация масштаба: average/min/max'
      }), _dec4 = property({
        tooltip: 'Включить логи (логирует только при изменении размера)'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AutoScaleCameraZ_OnResizeOnly, _Component);
        function AutoScaleCameraZ_OnResizeOnly() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "refResolution", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scaleMode", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "debugLogs", _descriptor3, _assertThisInitialized(_this));
          _this._basePos = new Vec3();
          // стартовая позиция камеры (референс)
          _this._refFrame = new Size(1, 1);
          // референсный frame — фиксируем на старте
          _this._lastFrame = new Size(0, 0);
          // предыдущий frame для детекта изменения
          _this._lastScale = 0;
          return _this;
        }
        var _proto = AutoScaleCameraZ_OnResizeOnly.prototype;
        _proto.onEnable = function onEnable() {
          // запоминаем базовую позицию
          this._basePos.set(this.node.position);

          // фиксируем референсный frame (текущее окно при старте)
          var f0 = view.getFrameSize();
          this._refFrame.width = Math.max(1, f0.width);
          this._refFrame.height = Math.max(1, f0.height);

          // сохраняем как "последний" — чтобы сразу не сработало
          this._lastFrame.width = f0.width;
          this._lastFrame.height = f0.height;
          if (this.debugLogs) {
            console.log('[AutoScaleCameraZ_OnResizeOnly] basePos=', this._basePos, ' refFrame=', this._refFrame.width + "x" + this._refFrame.height);
          }

          // первоначальная установка
          this._applyForFrame(f0.width, f0.height, 'initial');
        };
        _proto.update = function update() {
          var f = view.getFrameSize();
          // реагируем ТОЛЬКО если реально изменился размер окна
          if (f.width === this._lastFrame.width && f.height === this._lastFrame.height) {
            return;
          }
          this._lastFrame.width = f.width;
          this._lastFrame.height = f.height;
          this._applyForFrame(f.width, f.height, 'resize');
        };
        _proto._applyForFrame = function _applyForFrame(w, h, source) {
          // масштаб относительно референсного frame (зафиксирован на старте)
          var scaleX = w / this._refFrame.width;
          var scaleY = h / this._refFrame.height;
          var scale = 1;
          switch (this.scaleMode) {
            case 'min':
              scale = Math.min(scaleX, scaleY);
              break;
            case 'max':
              scale = Math.max(scaleX, scaleY);
              break;
            default:
              scale = (scaleX + scaleY) * 0.5;
              break;
            // average
          }

          // Требование:
          // - сужение (scale < 1): отдаляемся => z = z0 / scale (увеличиваем z)
          // - расширение (scale > 1): приближаемся, но не ближе референса => z >= z0
          var z0 = this._basePos.z;
          var zNew = z0 / (scale || 1);
          if (zNew < z0) zNew = z0; // кламп снизу: не ближе, чем в референсе

          // x/y не трогаем
          this.node.setPosition(this._basePos.x, this._basePos.y, zNew);
          if (this.debugLogs) {
            console.log('[AutoScaleCameraZ_OnResizeOnly]', "\n  source  = " + source, "\n  frame   = " + w + "x" + h, "\n  refFrm  = " + this._refFrame.width + "x" + this._refFrame.height, "\n  refRes  = " + this.refResolution.width + "x" + this.refResolution.height, "\n  scaleX  = " + scaleX.toFixed(4) + "  scaleY = " + scaleY.toFixed(4) + "  mode=" + this.scaleMode, "\n  scale   = " + scale.toFixed(4) + "  (prev=" + this._lastScale.toFixed(4) + ")", "\n  z0      = " + z0.toFixed(3) + "  zRaw=" + (z0 / (scale || 1)).toFixed(3) + "  => zNew=" + zNew.toFixed(3), '\n  (resized ✅)');
          }
          this._lastScale = scale;
        };
        return AutoScaleCameraZ_OnResizeOnly;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "refResolution", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Size(1920, 1080);
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "scaleMode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'average';
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "debugLogs", [_dec4], {
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

System.register("chunks:///_virtual/cake.types.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "62c0b/lKX5EKIeXadjVtKpv", "cake.types", undefined);
      /** ===== API-������ ===== */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CakeApiExample.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "7844ftwvDpJ44g6amQ0vR1m", "CakeApiExample", undefined);
      var ccclass = _decorator.ccclass;
      var CakeApiExample = exports('CakeApiExample', (_dec = ccclass('CakeApiExample'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CakeApiExample, _Component);
        function CakeApiExample() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = CakeApiExample.prototype;
        _proto.start = /*#__PURE__*/function () {
          var _start = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var response, text, data, rawItems, keys, normalized;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return fetch("https://api.demo-stage.ru/cake/list", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json"
                    },
                    body: JSON.stringify({})
                  });
                case 3:
                  response = _context.sent;
                  if (response.ok) {
                    _context.next = 10;
                    break;
                  }
                  _context.next = 7;
                  return safeReadText(response);
                case 7:
                  text = _context.sent;
                  console.error("Ошибка запроса:", response.status, text);
                  return _context.abrupt("return");
                case 10:
                  _context.next = 12;
                  return response.json()["catch"](function () {
                    return null;
                  });
                case 12:
                  data = _context.sent;
                  console.log('Сырой ответ API:', data);

                  // <-- ДОБАВИЛИ cakes
                  rawItems = Array.isArray(data) ? data : Array.isArray(data == null ? void 0 : data.cakes) ? data.cakes : Array.isArray(data == null ? void 0 : data.items) ? data.items : Array.isArray(data == null ? void 0 : data.data) ? data.data : Array.isArray(data == null ? void 0 : data.result) ? data.result : [];
                  if (!(!Array.isArray(rawItems) || rawItems.length === 0)) {
                    _context.next = 19;
                    break;
                  }
                  keys = data && typeof data === 'object' ? Object.keys(data) : [];
                  console.warn('Не нашли массив элементов. Ключи корня ответа:', keys);
                  return _context.abrupt("return");
                case 19:
                  normalized = rawItems.map(function (raw, idx) {
                    var n = normalizeCakePiece(raw);
                    if (!n.user_id) {
                      console.warn("[item " + idx + "] user_id \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0438\u043B\u0438 \u043D\u0435 UUID. \u0418\u0441\u0445\u043E\u0434\u043D\u043E\u0435:", pick(raw, 'user_id', 'uniq_id', 'userId', 'userID', 'user.id', 'attributes.user_id', 'attributes.userId'));
                    }
                    if (!n.hex_color) {
                      console.warn("[item " + idx + "] hex_color \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0438\u043B\u0438 \u043D\u0435 HEX. \u0418\u0441\u0445\u043E\u0434\u043D\u043E\u0435:", pick(raw, 'hex_color', 'hexColor', 'color', 'attributes.hex_color', 'attributes.color'));
                    }
                    return n;
                  });
                  console.log("Нормализованные элементы (отсутствующие поля = null):", normalized);
                  try {
                    // @ts-ignore
                    console.table(normalized.map(function (x, i) {
                      return {
                        '#': i,
                        user_id: x.user_id,
                        hex_color: x.hex_color,
                        name: x.name,
                        title: x.title,
                        greeting_text: x.greeting_text,
                        filling_id: x.filling_id,
                        file_present: x.file ? 'yes' : 'no'
                      };
                    }));
                  } catch (_unused) {}
                  _context.next = 27;
                  break;
                case 24:
                  _context.prev = 24;
                  _context.t0 = _context["catch"](0);
                  console.error("Ошибка соединения:", _context.t0);
                case 27:
                case "end":
                  return _context.stop();
              }
            }, _callee, null, [[0, 24]]);
          }));
          function start() {
            return _start.apply(this, arguments);
          }
          return start;
        }();
        return CakeApiExample;
      }(Component)) || _class));

      /* ================ Helpers ================ */
      function safeReadText(_x) {
        return _safeReadText.apply(this, arguments);
      } // Достаём значение по альтернативным путям (поддержка вложенности через '.')
      function _safeReadText() {
        _safeReadText = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(resp) {
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return resp.text();
              case 3:
                return _context2.abrupt("return", _context2.sent);
              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", "");
              case 9:
              case "end":
                return _context2.stop();
            }
          }, _callee2, null, [[0, 6]]);
        }));
        return _safeReadText.apply(this, arguments);
      }
      function pick(raw) {
        for (var _len = arguments.length, paths = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          paths[_key - 1] = arguments[_key];
        }
        for (var _i = 0, _paths = paths; _i < _paths.length; _i++) {
          var p = _paths[_i];
          var v = p.split('.').reduce(function (acc, k) {
            return acc ? acc[k] : undefined;
          }, raw);
          if (v !== undefined) return v;
        }
        return undefined;
      }
      function strOrNull(v) {
        if (typeof v === 'string') {
          var s = v.trim();
          return s.length ? s : null;
        }
        return null;
      }
      function numOrNull(v) {
        if (typeof v === 'number' && Number.isFinite(v)) return v;
        if (typeof v === 'string') {
          var s = v.trim();
          if (s === '') return null;
          var n = Number(s);
          return Number.isFinite(n) ? n : null;
        }
        return null;
      }

      // UUID 8-4-4-4-12 (версии не проверяем строго)
      function isUuidLoose(v) {
        var s = v.trim();
        return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(s);
      }

      // HEX: #RGB / #RRGGBB или без '#'
      function isHexColor(v) {
        return /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.test(v.trim());
      }
      function normalizeHex(v) {
        var s = (v.startsWith('#') ? v.slice(1) : v).trim().toLowerCase();
        if (s.length === 3) return '#' + s.split('').map(function (ch) {
          return ch + ch;
        }).join('').toUpperCase();
        if (s.length === 6) return '#' + s.toUpperCase();
        return s ? '#' + s.slice(0, 6).toUpperCase() : '#000000';
      }
      function normalizeCakePiece(raw) {
        // <-- ДОБАВИЛИ uniq_id как источник user_id
        var user_idRaw = pick(raw, 'user_id', 'uniq_id', 'userId', 'userID', 'user.id', 'attributes.user_id', 'attributes.userId');
        var hexColorRaw = pick(raw, 'hex_color', 'hexColor', 'color', 'attributes.hex_color', 'attributes.color');
        var nameRaw = pick(raw, 'name', 'nickname', 'user_name', 'attributes.name');
        var titleRaw = pick(raw, 'title', 'label', 'attributes.title');
        var greetingRaw = pick(raw, 'greeting_text', 'greetingText', 'greeting', 'attributes.greeting_text');
        var fillingRaw = pick(raw, 'filling_id', 'fillingId', 'attributes.filling_id');
        var fileRaw = pick(raw, 'file', 'file_base64', 'attributes.file');
        var user_id = strOrNull(user_idRaw);
        if (user_id && !isUuidLoose(user_id)) {
          console.warn('user_id не прошёл UUID-проверку → null:', user_id);
          user_id = null;
        }
        var hex_color = strOrNull(hexColorRaw);
        if (hex_color && isHexColor(hex_color)) {
          hex_color = normalizeHex(hex_color);
        } else {
          if (hex_color) console.warn('hex_color не прошёл HEX-проверку → null:', hex_color);
          hex_color = null;
        }
        return {
          user_id: user_id,
          hex_color: hex_color,
          name: strOrNull(nameRaw),
          title: strOrNull(titleRaw),
          greeting_text: strOrNull(greetingRaw),
          filling_id: numOrNull(fillingRaw),
          file: strOrNull(fileRaw)
        };
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CameraTuner.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Camera, Node, EditBox, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Camera = module.Camera;
      Node = module.Node;
      EditBox = module.EditBox;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "c3cf46KIGlMI5X2BRz/vNd6", "CameraTuner", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var CameraTuner = exports('CameraTuner', (_dec = ccclass('CameraTuner'), _dec2 = property({
        type: Camera,
        tooltip: '������, ������� �����������'
      }), _dec3 = property({
        type: Node,
        tooltip: '�������� ������ (���� �� ������ � ������ parent � camera.node)'
      }), _dec4 = property({
        tooltip: 'Z-������� �������� ������ (���������)'
      }), _dec5 = property({
        tooltip: '������� ������ �� X (� ��������)'
      }), _dec6 = property({
        tooltip: '���� ������ ������ FOV (� ��������, 1�170)'
      }), _dec7 = property({
        tooltip: '��������� ��������� ��� ������ �����'
      }), _dec8 = property({
        type: EditBox,
        tooltip: 'EditBox ��� ����� Z ��������'
      }), _dec9 = property({
        type: EditBox,
        tooltip: 'EditBox ��� ����� X-�������� (deg)'
      }), _dec10 = property({
        type: EditBox,
        tooltip: 'EditBox ��� ����� FOV (deg)'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CameraTuner, _Component);
        function CameraTuner() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          // --- ������ ---
          _initializerDefineProperty(_this, "camera", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cameraParent", _descriptor2, _assertThisInitialized(_this));
          // --- �������� �� ��������� (��� ����������) ---
          _initializerDefineProperty(_this, "parentZ", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rotationXDeg", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "fovDeg", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "applyOnStart", _descriptor6, _assertThisInitialized(_this));
          // --- �������� UI (�������������) ---
          _initializerDefineProperty(_this, "uiParentZ", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "uiRotX", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "uiFov", _descriptor9, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = CameraTuner.prototype;
        // ������ � UI ������������ � ������ onApplyFromUI()
        _proto.onLoad = function onLoad() {
          // ���� cameraParent �� �����, ���������� parent ���� ������
          if (!this.cameraParent && this.camera) {
            this.cameraParent = this.camera.node.parent || null;
          }
        };
        _proto.start = function start() {
          if (this.applyOnStart) {
            this.applyValues(this.parentZ, this.rotationXDeg, this.fovDeg);
          }
        }

        /** ��������� �������� (�������� �����) */;
        _proto.applyValues = function applyValues(parentZ, rotXDeg, fovDeg) {
          if (!this.camera) {
            console.warn('[CameraTuner] Camera �� ���������');
            return;
          }
          var parent = this.cameraParent;
          if (!parent) {
            console.warn('[CameraTuner] �������� ������ �� ������');
          } else {
            var p = parent.getPosition();
            parent.setPosition(p.x, p.y, parentZ);
          }

          // ������� �� X
          var e = this.camera.node.eulerAngles.clone();
          e.x = rotXDeg;
          this.camera.node.eulerAngles = e;

          // FOV (������ ��� ������������� ������)
          // ��������� � �������� ��������
          var clampedFov = Math.min(170, Math.max(1, fovDeg));
          this.camera.fov = clampedFov;

          // �������� ��� �������� ��� ������� (����� ��������� ��������� ��������)
          this.parentZ = parentZ;
          this.rotationXDeg = rotXDeg;
          this.fovDeg = clampedFov;
        }

        /** ���������� ������ UI: ������� �� EditBox'�� � ��������� */;
        _proto.onApplyFromUI = function onApplyFromUI() {
          var _this$uiParentZ, _this$uiRotX, _this$uiFov;
          var z = this.parseNumber((_this$uiParentZ = this.uiParentZ) == null ? void 0 : _this$uiParentZ.string, this.parentZ);
          var rx = this.parseNumber((_this$uiRotX = this.uiRotX) == null ? void 0 : _this$uiRotX.string, this.rotationXDeg);
          var fov = this.parseNumber((_this$uiFov = this.uiFov) == null ? void 0 : _this$uiFov.string, this.fovDeg);
          this.applyValues(z, rx, fov);
        };
        _proto.parseNumber = function parseNumber(s, fallback) {
          if (s == null) return fallback;
          var v = Number(s.replace(',', '.'));
          return Number.isFinite(v) ? v : fallback;
        };
        return CameraTuner;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "camera", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "cameraParent", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "parentZ", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "rotationXDeg", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "fovDeg", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 60;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "applyOnStart", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "uiParentZ", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "uiRotX", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "uiFov", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ClickMoveBinding.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ArcTextMesh.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, MeshRenderer, Animation, tween, Vec3, Component, ParticleSystem, ArcTextMSDFOneLine;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      MeshRenderer = module.MeshRenderer;
      Animation = module.Animation;
      tween = module.tween;
      Vec3 = module.Vec3;
      Component = module.Component;
      ParticleSystem = module.ParticleSystem;
    }, function (module) {
      ArcTextMSDFOneLine = module.ArcTextMSDFOneLine;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15;
      cclegacy._RF.push({}, "a3b9f30vchC9aP2MSuw/5Bg", "ClickMoveBinding", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ClickMoveBinding = exports('ClickMoveBinding', (_dec = ccclass('ClickMoveBinding'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: MeshRenderer
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: ArcTextMSDFOneLine
      }), _dec7 = property({
        type: Node,
        tooltip: 'Объект c партиклом для выезда кусочка'
      }), _dec8 = property({
        type: Node
      }), _dec9 = property({
        type: [Node]
      }), _dec10 = property({
        type: Node
      }), _dec11 = property({
        type: [Node]
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ClickMoveBinding, _Component);
        function ClickMoveBinding() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          // ====== твои поля (оставил) ======
          _initializerDefineProperty(_this, "target", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "meshRenderer", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "model", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rim", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arcText", _descriptor5, _assertThisInitialized(_this));
          // +++ НОВОЕ: переносим из GlobalClickManager3D
          _initializerDefineProperty(_this, "pullParticleObject", _descriptor6, _assertThisInitialized(_this));
          _this._startTargetPos = null;
          _this._startModelEuler = null;
          _this._captured = false;
          // =========================
          // ====== Анимации UI ======
          // =========================
          /** Главный объект (ОТДЕЛЬНЫЙ от target), появляется первым (scale 0 -> 1) */
          _initializerDefineProperty(_this, "main", _descriptor7, _assertThisInitialized(_this));
          /** Свечки, включаются последовательно (scale 0 -> 1) */
          _initializerDefineProperty(_this, "candles", _descriptor8, _assertThisInitialized(_this));
          /** Узел-хаб: на нём лежат несколько компонентов Animation (по одному для каждой свечи) */
          _initializerDefineProperty(_this, "candleAnimatorHubNode", _descriptor9, _assertThisInitialized(_this));
          /** 2 ягоды, включаются одновременно (scale 0 -> 1) */
          _initializerDefineProperty(_this, "berries", _descriptor10, _assertThisInitialized(_this));
          /** Тайминги/настройки анимаций */
          _initializerDefineProperty(_this, "mainDuration", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mainDurationHide", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "candleDuration", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "candleDelayBetween", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "berriesDuration", _descriptor15, _assertThisInitialized(_this));
          /** Ведём твины, чтобы можно было стопать при повторном запуске */
          _this._runningTweens = [];
          /** Кэш всех Animation с узла-хаба (индекс соответствует индексу свечи) */
          _this._hubAnims = [];
          return _this;
        }
        var _proto = ClickMoveBinding.prototype;
        _proto.onEnable = function onEnable() {
          this.ensureCaptured();
        };
        _proto.ensureCaptured = function ensureCaptured() {
          if (this._captured) return;
          if (this.target) this._startTargetPos = this.target.getPosition().clone();
          if (this.model) this._startModelEuler = this.model.eulerAngles.clone();
          this._captured = !!this.target;
        }

        /** Гарантированный апдейт текста: даже если ArcText был disabled или freezeAfterBuild=true */;
        _proto.updateFromApi = function updateFromApi(apiData) {
          var t = this.arcText;
          if (!t) return;
          var wasEnabled = t.enabled;
          if (!wasEnabled) t.enabled = true;
          t.applyApiData(apiData);

          // гарантированная сборка
          if (typeof t.rebuildNow === 'function') {
            t.rebuildNow();
          }

          // 🔎 сюда — разовый вызов отладки/пробы цвета
          // t.debugDumpMaterialInfo(); // один раз для диагностики
          //t.debugForceTextColor(new Color(255, 0, 0, 255)); // проба, всё должно покраснеть

          if (!wasEnabled && t.freezeAfterBuild) {
            t.enabled = false;
          }
        };
        _proto.logWorld = function logWorld(label) {
          if (this.target) console.log("[" + label + "] target world pos=", this.target.worldPosition.clone());
          if (this.model) console.log("[" + label + "] model  world pos=", this.model.worldPosition.clone(), 'euler=', this.model.eulerAngles.clone());
        };
        // ====== lifecycle ======
        _proto.start = function start() {
          this._prepareAnimationState();
          this._collectHubAnims();
        }

        // ====== публичные сценарии ======

        /** Запуск полной последовательности открытия */;
        _proto.playSequence = /*#__PURE__*/
        function () {
          var _playSequence = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var i;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  this.stopSequence();
                  this._prepareAnimationState();

                  // 1) main
                  _context.next = 4;
                  return this._appearMain();
                case 4:
                  i = 0;
                case 5:
                  if (!(i < this.candles.length)) {
                    _context.next = 14;
                    break;
                  }
                  _context.next = 8;
                  return this._appearCandle(i);
                case 8:
                  if (!(this.candleDelayBetween > 0 && i < this.candles.length - 1)) {
                    _context.next = 11;
                    break;
                  }
                  _context.next = 11;
                  return this._delay(this.candleDelayBetween);
                case 11:
                  i++;
                  _context.next = 5;
                  break;
                case 14:
                  _context.next = 16;
                  return this._appearBerriesParallel();
                case 16:
                  // 4) теперь — одновременно запустить все анимации с хаба
                  this._enableAndPlayAllHubAnims();
                case 17:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function playSequence() {
            return _playSequence.apply(this, arguments);
          }
          return playSequence;
        }() /** Одновременный запуск всех аниматоров, лежащих на candleAnimatorHubNode */;
        _proto._enableAndPlayAllHubAnims = function _enableAndPlayAllHubAnims() {
          for (var _iterator = _createForOfIteratorHelperLoose(this._hubAnims), _step; !(_step = _iterator()).done;) {
            var anim = _step.value;
            if (!anim) continue;
            anim.enabled = true;
            try {
              anim.stop();
              anim.play(); // у каждого компонента — его дефолтный клип
            } catch (_unused) {/* noop */}
          }
        }

        /** Обратная анимация (только main 1->0) + полный reset */;
        _proto.playSequenceCloseAndReset = /*#__PURE__*/
        function () {
          var _playSequenceCloseAndReset = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  this.stopSequence();
                  if (!(!this.main || !this.main.active)) {
                    _context2.next = 4;
                    break;
                  }
                  this.resetVisuals();
                  return _context2.abrupt("return");
                case 4:
                  this.main.active = true;
                  _context2.next = 7;
                  return this._scaleTo(this.main, 0, this.mainDurationHide, 'backIn');
                case 7:
                  this.main.active = false;
                  this.resetVisuals();
                case 9:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function playSequenceCloseAndReset() {
            return _playSequenceCloseAndReset.apply(this, arguments);
          }
          return playSequenceCloseAndReset;
        }() /** Полный сброс: всё выключено и scale=0, аниматоры остановлены и выключены */;
        _proto.resetVisuals = function resetVisuals() {
          // главный
          if (this.main) {
            this.main.active = false;
            this.main.setScale(0, 0, 0);
          }
          // свечи
          for (var _iterator2 = _createForOfIteratorHelperLoose(this.candles), _step2; !(_step2 = _iterator2()).done;) {
            var c = _step2.value;
            if (!c) continue;
            c.active = false;
            c.setScale(0, 0, 0);
          }
          // ягоды
          for (var _iterator3 = _createForOfIteratorHelperLoose(this.berries), _step3; !(_step3 = _iterator3()).done;) {
            var b = _step3.value;
            if (!b) continue;
            b.active = false;
            b.setScale(0, 0, 0);
          }

          // остановить и выключить все Animation с хаба
          this._stopAndDisableAllHubAnims();
        }

        /** Остановка всех текущих твинов + стоп аниматоров хаба */;
        _proto.stopSequence = function stopSequence() {
          for (var _iterator4 = _createForOfIteratorHelperLoose(this._runningTweens), _step4; !(_step4 = _iterator4()).done;) {
            var t = _step4.value;
            try {
              t.stop();
            } catch (_unused2) {/* noop */}
          }
          this._runningTweens.length = 0;

          // просто стопаем аниматоры (оставляем включение/выключение на prepare/reset)
          this._stopAllHubAnims();
        }

        // ====== helpers: подготовка ======

        /** Стартовые состояния: всё выключено и scale=0; аниматоры — остановлены и выключены */;
        _proto._prepareAnimationState = function _prepareAnimationState() {
          if (this.main) {
            this.main.active = false;
            this.main.setScale(0, 0, 0);
          }
          for (var _iterator5 = _createForOfIteratorHelperLoose(this.candles), _step5; !(_step5 = _iterator5()).done;) {
            var c = _step5.value;
            if (!c) continue;
            c.active = false;
            c.setScale(0, 0, 0);
          }
          for (var _iterator6 = _createForOfIteratorHelperLoose(this.berries), _step6; !(_step6 = _iterator6()).done;) {
            var b = _step6.value;
            if (!b) continue;
            b.active = false;
            b.setScale(0, 0, 0);
          }
          if (this._hubAnims.length === 0) this._collectHubAnims();else this._stopAndDisableAllHubAnims();
        }

        /** Собрать все Animation с узла-хаба */;
        _proto._collectHubAnims = function _collectHubAnims() {
          this._hubAnims = [];
          if (!this.candleAnimatorHubNode) return;
          this._hubAnims = this.candleAnimatorHubNode.getComponents(Animation) || [];
          // безопасное состояние на старте
          for (var _iterator7 = _createForOfIteratorHelperLoose(this._hubAnims), _step7; !(_step7 = _iterator7()).done;) {
            var a = _step7.value;
            try {
              a.stop();
            } catch (_unused3) {/* noop */}
            a.enabled = false;
          }
        }

        // ====== helpers: появления ======
        ;

        _proto._appearMain = function _appearMain() {
          var _this2 = this;
          return new Promise(function (resolve) {
            if (!_this2.main) return resolve();
            var node = _this2.main;
            node.active = true;
            node.setScale(0, 0, 0);
            var tw = tween(node).to(_this2.mainDuration, {
              scale: new Vec3(1, 1, 1)
            }, {
              easing: 'backOut'
            }).call(function () {
              return resolve();
            }).start();
            _this2._runningTweens.push(tw);
          });
        }

        /** Скейл свечи и возврат; сам аниматор включается отдельно сразу после скейла */;
        _proto._appearCandle = function _appearCandle(index) {
          var _this3 = this;
          var candle = this.candles[index];
          if (!candle) return Promise.resolve();
          return new Promise(function (resolve) {
            candle.active = true;
            candle.setScale(0, 0, 0);
            var tw = tween(candle).to(_this3.candleDuration, {
              scale: new Vec3(1, 1, 1)
            }, {
              easing: 'bounceOut'
            }).call(function () {
              return resolve();
            }).start();
            _this3._runningTweens.push(tw);
          });
        };
        _proto._appearBerriesParallel = function _appearBerriesParallel() {
          var _this4 = this;
          var tasks = this.berries.map(function (b) {
            if (!b) return Promise.resolve();
            return new Promise(function (resolve) {
              b.active = true;
              b.setScale(0, 0, 0);
              var tw = tween(b).to(_this4.berriesDuration, {
                scale: new Vec3(1, 1, 1)
              }, {
                easing: 'backOut'
              }).call(function () {
                return resolve();
              }).start();
              _this4._runningTweens.push(tw);
            });
          });
          return Promise.all(tasks).then(function () {
            return undefined;
          });
        }

        // ====== helpers: аниматоры хаба ======

        /** Включить и проиграть нужный Animation по индексу свечи */;
        _proto._enableAndPlayHubAnim = function _enableAndPlayHubAnim(index) {
          var anim = this._hubAnims[index];
          if (!anim) return; // если компонентов меньше, просто пропускаем

          anim.enabled = true;
          try {
            anim.stop(); // старт с нуля
            anim.play(); // дефолтный клип этого компонента
          } catch (_unused4) {/* noop */}
        }

        /** Стопаем все (без выключения) — используется при stopSequence() */;
        _proto._stopAllHubAnims = function _stopAllHubAnims() {
          for (var _iterator8 = _createForOfIteratorHelperLoose(this._hubAnims), _step8; !(_step8 = _iterator8()).done;) {
            var a = _step8.value;
            if (!a) continue;
            try {
              a.stop();
            } catch (_unused5) {/* noop */}
          }
        }

        /** Стопаем и выключаем — используется при reset/prepare */;
        _proto._stopAndDisableAllHubAnims = function _stopAndDisableAllHubAnims() {
          for (var _iterator9 = _createForOfIteratorHelperLoose(this._hubAnims), _step9; !(_step9 = _iterator9()).done;) {
            var a = _step9.value;
            if (!a) continue;
            try {
              a.stop();
            } catch (_unused6) {/* noop */}
            a.enabled = false;
          }
        }

        // ====== общие утилиты ======
        ;

        _proto._scaleTo = function _scaleTo(node, to, duration, easing) {
          var _this5 = this;
          return new Promise(function (resolve) {
            var tw = tween(node).to(duration, {
              scale: new Vec3(to, to, to)
            }, {
              easing: easing
            }).call(function () {
              return resolve();
            }).start();
            _this5._runningTweens.push(tw);
          });
        };
        _proto._delay = function _delay(sec) {
          return new Promise(function (r) {
            return setTimeout(r, Math.max(0, sec * 1000));
          });
        }

        /** Предпочтительный MeshRenderer — нужен ColorLibrary-хелперам */;
        _proto.getPreferredMeshRenderer = function getPreferredMeshRenderer() {
          var _ref, _ref2, _tryFrom;
          if (this.meshRenderer) return this.meshRenderer;
          var tryFrom = function tryFrom(n) {
            var _n$getComponent;
            return (_n$getComponent = n == null ? void 0 : n.getComponent(MeshRenderer)) != null ? _n$getComponent : null;
          };
          return (_ref = (_ref2 = (_tryFrom = tryFrom(this.model)) != null ? _tryFrom : tryFrom(this.rim)) != null ? _ref2 : this.node.getComponent(MeshRenderer)) != null ? _ref : null;
        };
        _createClass(ClickMoveBinding, [{
          key: "pullParticle",
          get: function get() {
            var _this$pullParticleObj, _this$pullParticleObj2;
            return (_this$pullParticleObj = (_this$pullParticleObj2 = this.pullParticleObject) == null ? void 0 : _this$pullParticleObj2.getComponent(ParticleSystem)) != null ? _this$pullParticleObj : null;
          }
        }]);
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
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "arcText", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "pullParticleObject", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "main", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "candles", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "candleAnimatorHubNode", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "berries", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "mainDuration", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.45;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "mainDurationHide", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.45;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "candleDuration", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.35;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "candleDelayBetween", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.05;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "berriesDuration", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.35;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ColorLibrary.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, _inheritsLoose, _assertThisInitialized, _createForOfIteratorHelperLoose, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Color, Texture2D, director, ImageAsset, MeshRenderer, Component, assetManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _inheritsLoose = module.inheritsLoose;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Color = module.Color;
      Texture2D = module.Texture2D;
      director = module.director;
      ImageAsset = module.ImageAsset;
      MeshRenderer = module.MeshRenderer;
      Component = module.Component;
      assetManager = module.assetManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _class4, _class5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _class6;
      cclegacy._RF.push({}, "8daf7NAKxNJnqCgflAGm7av", "ColorLibrary", undefined);

      // чтобы избежать циклической зависимости на уровне кода, импортим типом

      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /** ТЕМА: имя + 2 цвета + БОКОВАЯ текстура (для mat1) + ЦВЕТ ТЕКСТА */
      var ThemeDef = exports('ThemeDef', (_dec = ccclass('ThemeDef'), _dec2 = property({
        tooltip: 'Имя темы (совпадает с hex_color из API)'
      }), _dec3 = property({
        type: Color,
        tooltip: 'Цвет #1 (для mat0)'
      }), _dec4 = property({
        type: Color,
        tooltip: 'Цвет #2 (для mat0)'
      }), _dec5 = property({
        type: Texture2D,
        tooltip: 'БОКОВАЯ текстура (для mat1)'
      }), _dec6 = property({
        type: Color,
        tooltip: 'Цвет текста (MSDF tint, u:tintColor)'
      }), _dec(_class = (_class2 = function ThemeDef() {
        _initializerDefineProperty(this, "name", _descriptor, this);
        _initializerDefineProperty(this, "color1", _descriptor2, this);
        _initializerDefineProperty(this, "color2", _descriptor3, this);
        _initializerDefineProperty(this, "sideTexture", _descriptor4, this);
        // 🔹 добавлено: цвет текста для MSDF-материалов
        _initializerDefineProperty(this, "textColor", _descriptor5, this);
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "name", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "color1", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(255, 255, 255, 255);
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "color2", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(0, 0, 0, 255);
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "sideTexture", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "textColor", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(255, 255, 255, 255);
        }
      })), _class2)) || _class));
      var ColorTextureLibrary = exports('ColorTextureLibrary', (_dec7 = ccclass('ColorTextureLibrary'), _dec8 = property({
        type: [ThemeDef],
        tooltip: 'Список тем'
      }), _dec9 = property({
        type: [Texture2D],
        tooltip: 'Глобальный список паттернов (для mat0)'
      }), _dec10 = property({
        tooltip: 'Материал ПАТТЕРНА (index=0)'
      }), _dec11 = property({
        tooltip: 'Материал БОКОВОЙ КАРТИНКИ (index=1)'
      }), _dec12 = property({
        tooltip: 'u-поле цвета #1 (только mat0)'
      }), _dec13 = property({
        tooltip: 'u-поле цвета #2 (только mat0)'
      }), _dec14 = property({
        tooltip: 'u-поле ТЕКСТУРЫ ПАТТЕРНА (для mat0)'
      }), _dec15 = property({
        tooltip: 'u-поле БОКОВОЙ ТЕКСТУРЫ (для mat1)'
      }), _dec16 = property({
        tooltip: 'Расширение по умолчанию для URL'
      }), _dec17 = property({
        type: Texture2D,
        tooltip: 'Глобальная ТЕКСТУРА ПРИ ЗАГРУЗКЕ (для mat1)'
      }), _dec18 = property({
        type: Texture2D,
        tooltip: 'Глобальная ТЕКСТУРА ОШИБКИ (для mat1)'
      }), _dec7(_class4 = (_class5 = (_class6 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ColorTextureLibrary, _Component);
        function ColorTextureLibrary() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
            args[_key2] = arguments[_key2];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          // ---------- Темы и паттерны ----------
          _initializerDefineProperty(_this, "themes", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "patternTextures", _descriptor7, _assertThisInitialized(_this));
          // ---------- Индексы материалов ----------
          _initializerDefineProperty(_this, "patternMatIndex", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sideMatIndex", _descriptor9, _assertThisInitialized(_this));
          // ---------- Uniform names ----------
          _initializerDefineProperty(_this, "color1Uniform", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "color2Uniform", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "textureUniform", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sideTextureUniform", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "defaultExt", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "loadingSideTexture", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "errorSideTexture", _descriptor16, _assertThisInitialized(_this));
          // ---------- Внутренний кэш ----------
          _this._urlEntry = new Map();
          _this._applied = new WeakMap();
          _this._lastReqToken = new WeakMap();
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
          try {
            var canvas = document.createElement('canvas');
            canvas.width = 1;
            canvas.height = 1;
            var ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, 1, 1);
            var img = new ImageAsset(canvas);
            var tex = new Texture2D();
            tex.image = img;

            // если у темы нет sideTexture — пусть будет прозрачный placeholder
            for (var _iterator = _createForOfIteratorHelperLoose(this.themes), _step; !(_step = _iterator()).done;) {
              var t = _step.value;
              if (!t.sideTexture) t.sideTexture = tex;
            }
            // если не заданы плейсхолдеры — подставим прозрачный
            if (!this.loadingSideTexture) this.loadingSideTexture = tex;
            if (!this.errorSideTexture) this.errorSideTexture = tex;
          } catch (_unused) {/* ок, просто без преварма */}
        }

        // ===================== ТЕМЫ =====================
        ;

        _proto.getThemeByName = function getThemeByName(name) {
          var _this$themes$find;
          if (!name) return null;
          var n = name.trim().toLowerCase();
          if (!n) return null;
          return (_this$themes$find = this.themes.find(function (t) {
            var _t$name;
            return ((_t$name = t == null ? void 0 : t.name) != null ? _t$name : '').trim().toLowerCase() === n;
          })) != null ? _this$themes$find : null;
        };
        _proto.pickRandomTheme = function pickRandomTheme(seed, gidx) {
          var _this$themes$i;
          if (!this.themes.length) return null;
          var a = (seed ^ gidx * 0x9E3779B9) >>> 0;
          var rng = function rng() {
            a += 0x6D2B79F5;
            var t = a;
            t = Math.imul(t ^ t >>> 15, t | 1);
            t ^= t + Math.imul(t ^ t >>> 7, t | 61);
            return ((t ^ t >>> 14) >>> 0) / 4294967296;
          };
          var i = Math.floor(rng() * this.themes.length);
          return (_this$themes$i = this.themes[i]) != null ? _this$themes$i : this.themes[0];
        };
        _proto.resolveTheme = function resolveTheme(nameFromApi, seed, gidx) {
          var _this$getThemeByName;
          return (_this$getThemeByName = this.getThemeByName(nameFromApi)) != null ? _this$getThemeByName : this.pickRandomTheme(seed, gidx);
        }

        // ===================== ПРИМЕНЕНИЕ ТЕМЫ =====================
        ;

        _proto.applyThemeForPiece = function applyThemeForPiece(target, theme, gidx, seedForPattern, apiPatternIndex) {
          var mr = target instanceof MeshRenderer ? target : target.getComponent(MeshRenderer);
          if (!mr || !theme) return;

          // MAT0: цвета + паттерн
          var mat0 = mr.getMaterialInstance(this.patternMatIndex);
          if (mat0) {
            try {
              mat0.setProperty(this.color1Uniform, theme.color1);
              mat0.setProperty(this.color2Uniform, theme.color2);
            } catch (_unused2) {}
            var patternTex = this.resolvePatternTexture(seedForPattern, gidx, apiPatternIndex);
            if (patternTex) {
              try {
                mat0.setProperty(this.textureUniform, patternTex);
                this._swapAppliedRecord(mr, this.patternMatIndex, this.textureUniform, null);
              } catch (_unused3) {}
            } else {
              this._applyNull(mr, this.patternMatIndex, this.textureUniform);
            }
          }

          // MAT1: боковая
          var mat1 = mr.getMaterialInstance(this.sideMatIndex);
          if (mat1) {
            if (theme.sideTexture) {
              try {
                mat1.setProperty(this.sideTextureUniform, theme.sideTexture);
                this._swapAppliedRecord(mr, this.sideMatIndex, this.sideTextureUniform, null);
              } catch (_unused4) {}
            } else {
              this._applyNull(mr, this.sideMatIndex, this.sideTextureUniform);
            }
          }
        }

        /** Если API дал индекс — берём его; иначе детерминированно по seed+gidx. */;
        _proto.resolvePatternTexture = function resolvePatternTexture(seed, gidx, apiPatternIndex) {
          var list = this.patternTextures;
          if (!(list != null && list.length)) return null;
          if (apiPatternIndex != null) {
            var n = list.length;
            if (n > 0) {
              var _list$i;
              var i = (apiPatternIndex % n + n) % n; // безопасная нормализация
              return (_list$i = list[i]) != null ? _list$i : null;
            }
          }
          // fallback: старый детерминированный выбор
          return this.pickPatternTexture(seed, gidx);
        };
        _proto.pickPatternTexture = function pickPatternTexture(seed, gidx) {
          var _list$i2;
          var list = this.patternTextures;
          if (!(list != null && list.length)) return null;
          var a = (seed ^ gidx * 0x85EBCA77) >>> 0;
          a += 0x6D2B79F5;
          var i = (a >>> 0) % list.length;
          return (_list$i2 = list[i]) != null ? _list$i2 : null;
        }

        // ===================== КЛИК (URL для боковой) =====================
        ;

        _proto.applyMainTextureFromUrlOrThemeSide = /*#__PURE__*/
        function () {
          var _applyMainTextureFromUrlOrThemeSide = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(target, url, theme) {
            var _theme$sideTexture, _this$_lastReqToken$g;
            var mr, mat, themeTex, _ref, _this$loadingSideText, loadTex, token, tex;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  mr = target instanceof MeshRenderer ? target : target.getComponent(MeshRenderer);
                  if (mr) {
                    _context.next = 3;
                    break;
                  }
                  return _context.abrupt("return", 'skipped');
                case 3:
                  mat = mr.getMaterialInstance(this.sideMatIndex);
                  if (mat) {
                    _context.next = 6;
                    break;
                  }
                  return _context.abrupt("return", 'skipped');
                case 6:
                  themeTex = (_theme$sideTexture = theme == null ? void 0 : theme.sideTexture) != null ? _theme$sideTexture : null; // URL пустой → тема или очистка
                  if (!(!url || url.trim() === '')) {
                    _context.next = 21;
                    break;
                  }
                  if (!themeTex) {
                    _context.next = 19;
                    break;
                  }
                  _context.prev = 9;
                  mat.setProperty(this.sideTextureUniform, themeTex);
                  this._swapAppliedRecord(mr, this.sideMatIndex, this.sideTextureUniform, null);
                  return _context.abrupt("return", 'theme');
                case 15:
                  _context.prev = 15;
                  _context.t0 = _context["catch"](9);
                  this._applyNull(mr, this.sideMatIndex, this.sideTextureUniform);
                  return _context.abrupt("return", 'cleared');
                case 19:
                  this._applyNull(mr, this.sideMatIndex, this.sideTextureUniform);
                  return _context.abrupt("return", 'cleared');
                case 21:
                  // ── ставим плейсхолдер "loading" сразу
                  try {
                    loadTex = (_ref = (_this$loadingSideText = this.loadingSideTexture) != null ? _this$loadingSideText : themeTex) != null ? _ref : null;
                    if (loadTex) {
                      mat.setProperty(this.sideTextureUniform, loadTex);
                      // не учитываем как внешний URL, поэтому url=null
                      this._swapAppliedRecord(mr, this.sideMatIndex, this.sideTextureUniform, null);
                    }
                  } catch (_unused6) {/* ignore */}

                  // защита от гонок
                  token = ((_this$_lastReqToken$g = this._lastReqToken.get(mr)) != null ? _this$_lastReqToken$g : 0) + 1;
                  this._lastReqToken.set(mr, token);
                  _context.next = 26;
                  return this._acquire(url, this.defaultExt);
                case 26:
                  tex = _context.sent;
                  if (!(this._lastReqToken.get(mr) !== token)) {
                    _context.next = 30;
                    break;
                  }
                  if (tex) this._release(url);
                  return _context.abrupt("return", 'skipped');
                case 30:
                  if (!tex) {
                    _context.next = 42;
                    break;
                  }
                  _context.prev = 31;
                  _context.next = 34;
                  return new Promise(function (resolve) {
                    if (typeof requestAnimationFrame !== 'undefined') requestAnimationFrame(function () {
                      return resolve();
                    });else setTimeout(resolve, 0);
                  });
                case 34:
                  mat.setProperty(this.sideTextureUniform, tex);
                  this._swapAppliedRecord(mr, this.sideMatIndex, this.sideTextureUniform, url);
                  return _context.abrupt("return", 'applied');
                case 39:
                  _context.prev = 39;
                  _context.t1 = _context["catch"](31);
                  this._release(url);
                // провалимся в обработку ошибки ниже
                case 42:
                  _context.prev = 42;
                  if (!this.errorSideTexture) {
                    _context.next = 47;
                    break;
                  }
                  mat.setProperty(this.sideTextureUniform, this.errorSideTexture);
                  this._swapAppliedRecord(mr, this.sideMatIndex, this.sideTextureUniform, null);
                  return _context.abrupt("return", 'error');
                case 47:
                  _context.next = 51;
                  break;
                case 49:
                  _context.prev = 49;
                  _context.t2 = _context["catch"](42);
                case 51:
                  if (!themeTex) {
                    _context.next = 60;
                    break;
                  }
                  _context.prev = 52;
                  mat.setProperty(this.sideTextureUniform, themeTex);
                  this._swapAppliedRecord(mr, this.sideMatIndex, this.sideTextureUniform, null);
                  return _context.abrupt("return", 'theme');
                case 58:
                  _context.prev = 58;
                  _context.t3 = _context["catch"](52);
                case 60:
                  this._applyNull(mr, this.sideMatIndex, this.sideTextureUniform);
                  return _context.abrupt("return", 'cleared');
                case 62:
                case "end":
                  return _context.stop();
              }
            }, _callee, this, [[9, 15], [31, 39], [42, 49], [52, 58]]);
          }));
          function applyMainTextureFromUrlOrThemeSide(_x, _x2, _x3) {
            return _applyMainTextureFromUrlOrThemeSide.apply(this, arguments);
          }
          return applyMainTextureFromUrlOrThemeSide;
        }() // ===================== НИЗКОУРОВНЕВОЕ =====================
        ;

        _proto._applyNull = function _applyNull(mr, matIndex, uniform) {
          var mat = mr.getMaterialInstance(matIndex);
          if (!mat) return;
          try {
            mat.setProperty(uniform, null);
          } catch (_unused10) {}
        };
        _proto._key = function _key(mi, u) {
          return mi + "|" + u;
        };
        _proto._getAppliedMap = function _getAppliedMap(mr) {
          var m = this._applied.get(mr);
          if (!m) {
            m = new Map();
            this._applied.set(mr, m);
          }
          return m;
        };
        _proto._swapAppliedRecord = function _swapAppliedRecord(mr, mi, u, url) {
          var _map$get$url, _map$get;
          var map = this._getAppliedMap(mr);
          var k = this._key(mi, u);
          var prev = (_map$get$url = (_map$get = map.get(k)) == null ? void 0 : _map$get.url) != null ? _map$get$url : null;
          if (prev && prev !== url) this._release(prev);
          map.set(k, {
            url: url
          });
        }

        // ColorLibrary.ts — внутри ColorTextureLibrary
        ;

        _proto._acquire = /*#__PURE__*/
        function () {
          var _acquire2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(url, fallbackExt) {
            var e, tex;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  e = this._urlEntry.get(url);
                  if (!e) {
                    e = {
                      refs: 0
                    };
                    this._urlEntry.set(url, e);
                  }
                  if (!e.tex) {
                    _context3.next = 5;
                    break;
                  }
                  e.refs++;
                  return _context3.abrupt("return", e.tex);
                case 5:
                  if (!e.loading) {
                    e.loading = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                      var resp, blob, bmp, imageAsset, _tex;
                      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                        while (1) switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.prev = 0;
                            _context2.next = 3;
                            return fetch(url, {
                              cache: 'force-cache'
                            });
                          case 3:
                            resp = _context2.sent;
                            if (resp.ok) {
                              _context2.next = 6;
                              break;
                            }
                            return _context2.abrupt("return", null);
                          case 6:
                            _context2.next = 8;
                            return resp.blob();
                          case 8:
                            blob = _context2.sent;
                            _context2.next = 11;
                            return createImageBitmap(blob, {
                              premultiplyAlpha: 'premultiply',
                              colorSpaceConversion: 'none'
                              // при желании можно ограничить размер:
                              // resizeWidth: 1024, resizeHeight: 1024, resizeQuality: 'high'
                            });

                          case 11:
                            bmp = _context2.sent;
                            // 3) заворачиваем в ImageAsset → Texture2D
                            imageAsset = new ImageAsset(bmp);
                            _tex = new Texture2D();
                            _tex.image = imageAsset;
                            return _context2.abrupt("return", _tex);
                          case 18:
                            _context2.prev = 18;
                            _context2.t0 = _context2["catch"](0);
                            _context2.next = 22;
                            return new Promise(function (resolve) {
                              var opts = /\.(png|jpg|jpeg|webp|bmp|gif)(\?|#|$)/i.test(url) ? undefined : {
                                ext: fallbackExt
                              };
                              assetManager.loadRemote(url, opts, function (err, imageAsset) {
                                if (err || !imageAsset) {
                                  resolve(null);
                                  return;
                                }
                                var tex = new Texture2D();
                                tex.image = imageAsset;
                                resolve(tex);
                              });
                            });
                          case 22:
                            return _context2.abrupt("return", _context2.sent);
                          case 23:
                          case "end":
                            return _context2.stop();
                        }
                      }, _callee2, null, [[0, 18]]);
                    }))().then(function (tex) {
                      e.loading = undefined;
                      if (tex) e.tex = tex;
                      return tex;
                    });
                  }
                  _context3.next = 8;
                  return e.loading;
                case 8:
                  tex = _context3.sent;
                  if (tex) e.refs++;
                  return _context3.abrupt("return", tex);
                case 11:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function _acquire(_x4, _x5) {
            return _acquire2.apply(this, arguments);
          }
          return _acquire;
        }();
        _proto._release = function _release(url) {
          var e = this._urlEntry.get(url);
          if (!e) return;
          e.refs = Math.max(0, e.refs - 1);
          if (e.refs === 0 && e.tex) {
            try {
              e.tex.destroy();
            } catch (_unused12) {}
            e.tex = undefined;
            this._urlEntry["delete"](url);
          }
        }

        /** Гарантированно применяет цвет текста к arcText из темы:
        * ждёт один кадр (пока появятся material instances) и только потом красит.
        */;
        _proto._applyTextColorFromThemeSafely = function _applyTextColorFromThemeSafely(binding, theme) {
          var t = binding == null ? void 0 : binding.arcText;
          if (!t || !(theme != null && theme.textColor)) return;

          // если выключен из-за freezeAfterBuild — временно включим
          var wasEnabled = t.enabled;
          if (!wasEnabled) t.enabled = true;

          // если нужно — можно форснуть сборку до кадра
          try {
            t.rebuildNow == null || t.rebuildNow();
          } catch (_unused13) {}

          // красим в СЛЕДУЮЩИЙ кадр — когда инстансы материалов точно будут
          this.scheduleOnce(function () {
            try {
              t.setColor(theme.textColor);
            } catch (_unused14) {}
            if (!wasEnabled && t.freezeAfterBuild) t.enabled = false;
          }, 0);
        }

        // ===================== ХЕЛПЕРЫ ДЛЯ ClickMoveBinding =====================

        /**
         * Применить тему к биндингу: паттерн/боковая + цвет текста (если есть arcText).
         */;
        _proto.applyThemeToBinding = function applyThemeToBinding(binding, nameFromApi, gidx, seedForPattern, apiPatternIndex, seedForThemePick) {
          var _ref3, _ref4, _ref5, _getPreferredMeshRend, _binding$model, _binding$node;
          if (!binding) return 'no-binding';
          var theme = this.resolveTheme(nameFromApi, seedForThemePick != null ? seedForThemePick : seedForPattern, gidx);
          if (!theme) return 'no-theme';

          // выберем MeshRenderer понадежнее (если нет getPreferredMeshRenderer)
          var mr = (_ref3 = (_ref4 = (_ref5 = (_getPreferredMeshRend = binding.getPreferredMeshRenderer == null ? void 0 : binding.getPreferredMeshRenderer()) != null ? _getPreferredMeshRend : binding.meshRenderer) != null ? _ref5 : (_binding$model = binding.model) == null ? void 0 : _binding$model.getComponent(MeshRenderer)) != null ? _ref4 : (_binding$node = binding.node) == null ? void 0 : _binding$node.getComponent(MeshRenderer)) != null ? _ref3 : null;
          if (mr) {
            this.applyThemeForPiece(mr, theme, gidx, seedForPattern, apiPatternIndex);
          }

          // ✅ цвет текста — безопасно, в следующий кадр
          this._applyTextColorFromThemeSafely(binding, theme);
          return 'ok';
        }

        /**
        * Прокинуть текст из API в arcText через биндинг.
        * ВАЖНО: теперь ВСЕГДА применяем, даже если строки пустые — чтобы затереть старый текст.
        */;
        _proto.applyApiTextToBinding = function applyApiTextToBinding(binding, data) {
          var _data$title, _data$name, _binding$arcText;
          if (!binding) return 'no-binding';
          var t = (_data$title = data.title) != null ? _data$title : ''; // не trim — пустая строка должна сохраниться как есть
          var n = (_data$name = data.name) != null ? _data$name : '';
          (_binding$arcText = binding.arcText) == null || _binding$arcText.applyApiData({
            title: t,
            name: n
          });
          return 'ok';
        }

        /**
        * Поставить боковую картинку из URL (или взять из темы, если URL пустой).
        */;
        _proto.applySideUrlOrThemeToBinding = /*#__PURE__*/
        function () {
          var _applySideUrlOrThemeToBinding = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(binding, url, nameFromApiForTheme, gidx, seedForThemePick) {
            var _binding$getPreferred;
            var mr, theme;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  if (binding) {
                    _context4.next = 2;
                    break;
                  }
                  return _context4.abrupt("return", 'no-binding');
                case 2:
                  mr = (_binding$getPreferred = binding.getPreferredMeshRenderer == null ? void 0 : binding.getPreferredMeshRenderer()) != null ? _binding$getPreferred : null;
                  if (mr) {
                    _context4.next = 5;
                    break;
                  }
                  return _context4.abrupt("return", 'skipped');
                case 5:
                  theme = this.resolveTheme(nameFromApiForTheme, seedForThemePick, gidx);
                  _context4.next = 8;
                  return this.applyMainTextureFromUrlOrThemeSide(mr, url, theme != null ? theme : undefined);
                case 8:
                  return _context4.abrupt("return", _context4.sent);
                case 9:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));
          function applySideUrlOrThemeToBinding(_x6, _x7, _x8, _x9, _x10) {
            return _applySideUrlOrThemeToBinding.apply(this, arguments);
          }
          return applySideUrlOrThemeToBinding;
        }();
        _createClass(ColorTextureLibrary, null, [{
          key: "instance",
          get: function get() {
            return this._i;
          }
        }]);
        return ColorTextureLibrary;
      }(Component), _class6._i = null, _class6), (_descriptor6 = _applyDecoratedDescriptor(_class5.prototype, "themes", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class5.prototype, "patternTextures", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class5.prototype, "patternMatIndex", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class5.prototype, "sideMatIndex", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class5.prototype, "color1Uniform", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'uColor1';
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class5.prototype, "color2Uniform", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'uColor2';
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class5.prototype, "textureUniform", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'TextureUniform';
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class5.prototype, "sideTextureUniform", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'uSideTex';
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class5.prototype, "defaultExt", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '.png';
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class5.prototype, "loadingSideTexture", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class5.prototype, "errorSideTexture", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class5)) || _class4));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DebugPanelToggle.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, setDisplayStats, systemEvent, SystemEvent, KeyCode, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      setDisplayStats = module.setDisplayStats;
      systemEvent = module.systemEvent;
      SystemEvent = module.SystemEvent;
      KeyCode = module.KeyCode;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "cfda1+1JjNMa47nVqaXXSGs", "DebugPanelToggle", undefined);
      var ccclass = _decorator.ccclass;
      var DebugPanelToggle3x = exports('DebugPanelToggle3x', (_dec = ccclass('DebugPanelToggle3x'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DebugPanelToggle3x, _Component);
        function DebugPanelToggle3x() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._debugVisible = false;
          return _this;
        }
        var _proto = DebugPanelToggle3x.prototype;
        _proto.start = function start() {
          // �� ��������� ��������� ������
          setDisplayStats(false);

          // ������� ������� P
          systemEvent.on(SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        };
        _proto.onKeyDown = function onKeyDown(event) {
          if (event.keyCode === KeyCode.KEY_P) {
            this._debugVisible = !this._debugVisible;
            setDisplayStats(this._debugVisible);
          }
        };
        _proto.onDestroy = function onDestroy() {
          systemEvent.off(SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        };
        return DebugPanelToggle3x;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GlobalClickManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ClickMoveBinding.ts', './InteractionState.ts', './PointerIds.ts', './RotateYByKeys.ts', './TVS_SpawnLayout.ts', './TowerScrollController.ts', './ColorLibrary.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Camera, Node, input, Input, geometry, PhysicsSystem, Vec3, tween, MeshRenderer, Component, sys, ParticleSystem, ClickMoveBinding, InteractionState, MOUSE_ID, RotateYByKeys, TowerLayoutController, TowerScrollController, ColorTextureLibrary;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Camera = module.Camera;
      Node = module.Node;
      input = module.input;
      Input = module.Input;
      geometry = module.geometry;
      PhysicsSystem = module.PhysicsSystem;
      Vec3 = module.Vec3;
      tween = module.tween;
      MeshRenderer = module.MeshRenderer;
      Component = module.Component;
      sys = module.sys;
      ParticleSystem = module.ParticleSystem;
    }, function (module) {
      ClickMoveBinding = module.ClickMoveBinding;
    }, function (module) {
      InteractionState = module.InteractionState;
    }, function (module) {
      MOUSE_ID = module.MOUSE_ID;
    }, function (module) {
      RotateYByKeys = module.RotateYByKeys;
    }, function (module) {
      TowerLayoutController = module.TowerLayoutController;
    }, function (module) {
      TowerScrollController = module.TowerScrollController;
    }, function (module) {
      ColorTextureLibrary = module.ColorTextureLibrary;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _dec47, _dec48, _dec49, _dec50, _dec51, _dec52, _dec53, _dec54, _dec55, _dec56, _dec57, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _descriptor41, _descriptor42, _descriptor43, _descriptor44, _descriptor45, _descriptor46, _descriptor47, _descriptor48, _descriptor49, _descriptor50, _descriptor51, _descriptor52, _descriptor53, _descriptor54, _descriptor55, _descriptor56;
      cclegacy._RF.push({}, "4bd86blOoRLpq75wEwnh3v5", "GlobalClickManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      function yawFromVecXZ(v) {
        return Math.atan2(v.x, v.z) * 180 / Math.PI;
      }
      function wrapDeg(delta) {
        var d = (delta + 180) % 360;
        if (d < 0) d += 360;
        return d - 180;
      }
      var State = /*#__PURE__*/function (State) {
        State["Idle"] = "Idle";
        State["Aligning"] = "Aligning";
        State["SlideOut"] = "SlideOut";
        State["LockedOut"] = "LockedOut";
        State["SlideIn"] = "SlideIn";
        return State;
      }(State || {});
      var GlobalClickManager3D = exports('GlobalClickManager3D', (_dec = ccclass('GlobalClickManager3D'), _dec2 = property({
        type: Camera,
        tooltip: 'Камера для ПК/десктоп',
        group: {
          name: 'REFS',
          id: 'refs'
        },
        displayOrder: 1
      }), _dec3 = property({
        type: Camera,
        tooltip: 'Камера для мобильных',
        group: {
          name: 'REFS',
          id: 'refs'
        },
        displayOrder: 2
      }), _dec4 = property({
        type: Node,
        group: {
          name: 'REFS',
          id: 'refs'
        },
        displayOrder: 3
      }), _dec5 = property({
        type: RotateYByKeys,
        group: {
          name: 'REFS',
          id: 'refs'
        },
        displayOrder: 4
      }), _dec6 = property({
        type: TowerLayoutController,
        group: {
          name: 'REFS',
          id: 'refs'
        },
        displayOrder: 5
      }), _dec7 = property({
        type: TowerScrollController,
        group: {
          name: 'REFS',
          id: 'refs'
        },
        displayOrder: 6
      }), _dec8 = property({
        type: Node,
        tooltip: 'Блюр-подложка',
        group: {
          name: 'REFS',
          id: 'refs'
        },
        displayOrder: 7
      }), _dec9 = property({
        tooltip: 'Целевой скейл на ПК (ось X/Y/Z одинаковые)',
        group: {
          name: 'BLOOR / OVERLAY',
          id: 'bloor'
        },
        displayOrder: 1
      }), _dec10 = property({
        tooltip: 'Целевой скейл на мобильных (обычно 1.0)',
        group: {
          name: 'BLOOR / OVERLAY',
          id: 'bloor'
        },
        displayOrder: 2
      }), _dec11 = property({
        tooltip: 'Длительность анимации показа bloor',
        group: {
          name: 'BLOOR / OVERLAY',
          id: 'bloor'
        },
        displayOrder: 3
      }), _dec12 = property({
        tooltip: 'Длительность анимации скрытия bloor',
        group: {
          name: 'BLOOR / OVERLAY',
          id: 'bloor'
        },
        displayOrder: 4
      }), _dec13 = property({
        tooltip: 'Easing анимации скейла bloor',
        group: {
          name: 'BLOOR / OVERLAY',
          id: 'bloor'
        },
        displayOrder: 5
      }), _dec14 = property({
        type: Node,
        tooltip: 'Объект, который включаем после скейла bloor',
        group: {
          name: 'BLOOR / OVERLAY',
          id: 'bloor'
        },
        displayOrder: 6
      }), _dec15 = property({
        tooltip: 'Длительность смещения к центру по высоте',
        group: {
          name: 'TIMINGS',
          id: 'timings'
        },
        displayOrder: 1
      }), _dec16 = property({
        tooltip: 'Длительность маленького подталкивания',
        group: {
          name: 'TIMINGS',
          id: 'timings'
        },
        displayOrder: 2
      }), _dec17 = property({
        tooltip: 'Длительность поворота корня по слоту',
        group: {
          name: 'TIMINGS',
          id: 'timings'
        },
        displayOrder: 3
      }), _dec18 = property({
        tooltip: 'Смещение центра по высоте для уровней 0..1 (ПК)',
        group: {
          name: 'BIAS: DESKTOP',
          id: 'bias_pc'
        },
        displayOrder: 1
      }), _dec19 = property({
        tooltip: 'Смещение центра по высоте для уровней ≥2 (ПК)',
        group: {
          name: 'BIAS: DESKTOP',
          id: 'bias_pc'
        },
        displayOrder: 2
      }), _dec20 = property({
        tooltip: 'Смещение центра по высоте для уровней 0..1 (Мобилка)',
        group: {
          name: 'BIAS: MOBILE',
          id: 'bias_mob'
        },
        displayOrder: 1
      }), _dec21 = property({
        tooltip: 'Смещение центра по высоте для уровней ≥2 (Мобилка)',
        group: {
          name: 'BIAS: MOBILE',
          id: 'bias_mob'
        },
        displayOrder: 2
      }), _dec22 = property({
        tooltip: 'Мировое расстояние выезда по X (ПК)',
        group: {
          name: 'SLIDE',
          id: 'slide'
        },
        displayOrder: 1
      }), _dec23 = property({
        tooltip: 'Мировое расстояние выезда по X (Мобилка)',
        group: {
          name: 'SLIDE',
          id: 'slide'
        },
        displayOrder: 2
      }), _dec24 = property({
        tooltip: 'Доп. смещение по Y (мир) для ПК',
        group: {
          name: 'SLIDE',
          id: 'slide'
        },
        displayOrder: 3
      }), _dec25 = property({
        tooltip: 'Доп. смещение по Y (мир) для мобилки',
        group: {
          name: 'SLIDE',
          id: 'slide'
        },
        displayOrder: 4
      }), _dec26 = property({
        tooltip: 'Доп. смещение по Z (мир) для ПК',
        group: {
          name: 'SLIDE',
          id: 'slide'
        },
        displayOrder: 5
      }), _dec27 = property({
        tooltip: 'Доп. смещение по Z (мир) для мобилки',
        group: {
          name: 'SLIDE',
          id: 'slide'
        },
        displayOrder: 6
      }), _dec28 = property({
        tooltip: 'Easing для выезда/заезда',
        group: {
          name: 'SLIDE',
          id: 'slide'
        },
        displayOrder: 7
      }), _dec29 = property({
        tooltip: 'Длительность выезда/заезда',
        group: {
          name: 'SLIDE',
          id: 'slide'
        },
        displayOrder: 8
      }), _dec30 = property({
        tooltip: 'Локальный угол «лицом» (0=+Z, 90=+X)',
        group: {
          name: 'ROOT ROTATION',
          id: 'rootrot'
        },
        displayOrder: 1
      }), _dec31 = property({
        tooltip: '+180° инверт оси модели',
        group: {
          name: 'ROOT ROTATION',
          id: 'rootrot'
        },
        displayOrder: 2
      }), _dec32 = property({
        tooltip: 'Фазовый сдвиг слота',
        group: {
          name: 'ROOT ROTATION',
          id: 'rootrot'
        },
        displayOrder: 3
      }), _dec33 = property({
        tooltip: 'Длительность возврата модели к базе',
        group: {
          name: 'MODEL CLOSE',
          id: 'mclose'
        },
        displayOrder: 1
      }), _dec34 = property({
        tooltip: 'Easing возврата модели',
        group: {
          name: 'MODEL CLOSE',
          id: 'mclose'
        },
        displayOrder: 2
      }), _dec35 = property({
        tooltip: 'Origin родителя для postMessage; пусто = *',
        group: {
          name: 'INTEGRATION',
          id: 'events'
        },
        displayOrder: 1
      }), _dec36 = property({
        tooltip: 'Грузить картинку при клике на кусок',
        group: {
          name: 'IMAGE LOADER',
          id: 'img'
        },
        displayOrder: 1
      }), _dec37 = property({
        tooltip: 'Индекс материала для MainTexture',
        group: {
          name: 'IMAGE LOADER',
          id: 'img'
        },
        displayOrder: 2
      }), _dec38 = property({
        tooltip: 'Имя юниформа текстуры в шейдере',
        group: {
          name: 'IMAGE LOADER',
          id: 'img'
        },
        displayOrder: 3
      }), _dec39 = property({
        tooltip: 'Подсказка расширения, если URL без него',
        group: {
          name: 'IMAGE LOADER',
          id: 'img'
        },
        displayOrder: 4
      }), _dec40 = property({
        tooltip: 'Очищать MainTexture при закрытии',
        group: {
          name: 'IMAGE LOADER',
          id: 'img'
        },
        displayOrder: 5
      }), _dec41 = property({
        tooltip: 'Длительность полного оборота (360°)',
        group: {
          name: 'OPEN SPIN',
          id: 'ospin'
        },
        displayOrder: 1
      }), _dec42 = property({
        tooltip: 'Доп. доворот после 360° (deg)',
        group: {
          name: 'OPEN SPIN',
          id: 'ospin'
        },
        displayOrder: 2
      }), _dec43 = property({
        tooltip: 'Длительность доп. доворота',
        group: {
          name: 'OPEN SPIN',
          id: 'ospin'
        },
        displayOrder: 3
      }), _dec44 = property({
        tooltip: 'Easing для 360°+extra',
        group: {
          name: 'OPEN SPIN',
          id: 'ospin'
        },
        displayOrder: 4
      }), _dec45 = property({
        tooltip: 'Включать idle-анимацию после открытия',
        group: {
          name: 'IDLE',
          id: 'idle'
        },
        displayOrder: 1
      }), _dec46 = property({
        tooltip: 'Амплитуда idle по X (градусы)',
        group: {
          name: 'IDLE',
          id: 'idle'
        },
        displayOrder: 2
      }), _dec47 = property({
        tooltip: 'Амплитуда idle по Y (градусы)',
        group: {
          name: 'IDLE',
          id: 'idle'
        },
        displayOrder: 3
      }), _dec48 = property({
        tooltip: 'Амплитуда idle по Z (градусы)',
        group: {
          name: 'IDLE',
          id: 'idle'
        },
        displayOrder: 4
      }), _dec49 = property({
        tooltip: 'Длительность одного полного idle-цикла (сек)',
        group: {
          name: 'IDLE',
          id: 'idle'
        },
        displayOrder: 5
      }), _dec50 = property({
        tooltip: 'Включить доп.пинг-понг по Y (поверх синуса)',
        group: {
          name: 'IDLE',
          id: 'idle'
        },
        displayOrder: 6
      }), _dec51 = property({
        tooltip: 'Минимальный относительный угол по Y (deg) для пинг-понга',
        group: {
          name: 'IDLE',
          id: 'idle'
        },
        displayOrder: 7
      }), _dec52 = property({
        tooltip: 'Максимальный относительный угол по Y (deg) для пинг-понга',
        group: {
          name: 'IDLE',
          id: 'idle'
        },
        displayOrder: 8
      }), _dec53 = property({
        tooltip: 'Фазовый сдвиг синуса по Y (рад)',
        group: {
          name: 'IDLE',
          id: 'idle'
        },
        displayOrder: 9
      }), _dec54 = property({
        tooltip: 'Длительность плавного входа в idle (сек)',
        group: {
          name: 'IDLE',
          id: 'idle'
        },
        displayOrder: 10
      }), _dec55 = property({
        tooltip: 'Кривизна easing при входе (0..1)',
        group: {
          name: 'IDLE',
          id: 'idle'
        },
        displayOrder: 11
      }), _dec56 = property({
        tooltip: 'Скорость именно пинг-понга по Y (множитель)',
        group: {
          name: 'IDLE',
          id: 'idle'
        },
        displayOrder: 12
      }), _dec57 = property({
        tooltip: 'Idle: стартовать к дальнему углу (а не к ближайшему)',
        group: {
          name: 'IDLE',
          id: 'idle'
        },
        displayOrder: 13
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GlobalClickManager3D, _Component);
        function GlobalClickManager3D() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          // ===================== [REFS / LINKS] =====================
          _initializerDefineProperty(_this, "sceneCamera", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sceneCameraMobile", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rotatingRoot", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rotator", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "layoutCtrl", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scrollCtrl", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bloor", _descriptor7, _assertThisInitialized(_this));
          // ===================== [BLOOR SCALE ANIM] =====================
          _initializerDefineProperty(_this, "bloorScaleDesktop", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bloorScaleMobile", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bloorScaleDuration", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bloorHideDuration", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bloorScaleEasing", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "afterBloorObject", _descriptor13, _assertThisInitialized(_this));
          // ===================== [CENTERING / ROTATE TIMINGS] =====================
          _initializerDefineProperty(_this, "heightCenterDuration", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "heightNudgeDuration", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rotateDuration", _descriptor16, _assertThisInitialized(_this));
          // ===================== [BIAS: DESKTOP] =====================
          _initializerDefineProperty(_this, "levelBiasTop", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "levelBiasRest", _descriptor18, _assertThisInitialized(_this));
          // ===================== [BIAS: MOBILE] =====================
          _initializerDefineProperty(_this, "levelBiasTopMobile", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "levelBiasRestMobile", _descriptor20, _assertThisInitialized(_this));
          // ===================== [SLIDE OUT/IN] =====================
          _initializerDefineProperty(_this, "openWorldDistance", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "openWorldDistanceMobile", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "openWorldOffsetYDesktop", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "openWorldOffsetYMobile", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "openWorldOffsetZDesktop", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "openWorldOffsetZMobile", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "slideEasing", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "slideDuration", _descriptor28, _assertThisInitialized(_this));
          // ===================== [ROOT FACING / SLOT ALIGN] =====================
          _initializerDefineProperty(_this, "faceYawLocalDeg", _descriptor29, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "invertPieceAxis", _descriptor30, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "slotPhaseShift", _descriptor31, _assertThisInitialized(_this));
          // ===================== [MODEL CLOSE BACK TO BASE] =====================
          _initializerDefineProperty(_this, "modelRotateDuration", _descriptor32, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "modelRotateEasing", _descriptor33, _assertThisInitialized(_this));
          // ===================== [EVENTS / INTEGRATION] =====================
          _initializerDefineProperty(_this, "parentOrigin", _descriptor34, _assertThisInitialized(_this));
          // ===================== [IMAGE LOADER] =====================
          _initializerDefineProperty(_this, "loadImageOnClick", _descriptor35, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "imageMatIndex", _descriptor36, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "imageUniform", _descriptor37, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "imageFallbackExt", _descriptor38, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "clearImageOnClose", _descriptor39, _assertThisInitialized(_this));
          // ===================== [OPEN SPIN (360° + EXTRA)] =====================
          _initializerDefineProperty(_this, "modelSpin360Duration", _descriptor40, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "modelExtraYawDeg", _descriptor41, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "modelExtraYawDuration", _descriptor42, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "modelSpinEasing", _descriptor43, _assertThisInitialized(_this));
          // ===================== [IDLE ANIMATION] =====================
          _initializerDefineProperty(_this, "enableIdleAnimation", _descriptor44, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "idleAmpX", _descriptor45, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "idleAmpY", _descriptor46, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "idleAmpZ", _descriptor47, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "idleCycleSeconds", _descriptor48, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "idleYRangeEnabled", _descriptor49, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "idleYRangeMinDeg", _descriptor50, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "idleYRangeMaxDeg", _descriptor51, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "idlePhaseY", _descriptor52, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "idleBlendInSeconds", _descriptor53, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "idleBlendCurve", _descriptor54, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "idleYRangeSpeed", _descriptor55, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "idleStartFar", _descriptor56, _assertThisInitialized(_this));
          // ======= STATE =======
          _this.fsm = State.Idle;
          _this.clickedLevel = 0;
          _this.clickedSlot = 0;
          _this.currentPiece = null;
          _this.currentBinding = null;
          _this.baseLocalX = new Map();
          // оставлено для совместимости
          _this.baseLocalPos = new Map();
          // новая база (x,y,z)
          _this.modelBaseEuler = new Map();
          _this.rotateTween = null;
          _this.modelTween = null;
          _this.idleTween = null;
          _this._emitOnThisAction = false;
          _this._activeCamera = null;
          _this.bloorTween = null;
          // стартовый множитель амплитуды idle (0 → 1)
          _this._idleAmpMulStart = 0.0;
          return _this;
        }
        var _proto = GlobalClickManager3D.prototype;
        // ===================== LIFECYCLE / INPUT =====================
        _proto.updateActiveCamera = function updateActiveCamera() {
          var _this$sceneCameraMobi, _this$sceneCamera, _this$sceneCamera2, _this$sceneCameraMobi2;
          var next = this.isMobile ? (_this$sceneCameraMobi = this.sceneCameraMobile) != null ? _this$sceneCameraMobi : this.sceneCamera : (_this$sceneCamera = this.sceneCamera) != null ? _this$sceneCamera : this.sceneCameraMobile;
          this._activeCamera = next != null ? next : null;
          if ((_this$sceneCamera2 = this.sceneCamera) != null && _this$sceneCamera2.node) this.sceneCamera.node.active = this._activeCamera === this.sceneCamera;
          if ((_this$sceneCameraMobi2 = this.sceneCameraMobile) != null && _this$sceneCameraMobi2.node) this.sceneCameraMobile.node.active = this._activeCamera === this.sceneCameraMobile;

          //if (this.bloor) {
          //    this.bloor.active = false;
          //    // Y фиксируем = 1, X/Z = 0 в скрытом состоянии
          //    this.bloor.setScale(0, 1, 0);
          //}
        };

        _proto.onEnable = function onEnable() {
          this.updateActiveCamera();
          input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          input.on(Input.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
          input.on(Input.EventType.MOUSE_UP, this.onMouseUp, this);
          try {
            window.addEventListener == null || window.addEventListener('resize', this.updateActiveCamera.bind(this));
          } catch (_unused) {}
        };
        _proto.onDisable = function onDisable() {
          input.off(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          input.off(Input.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
          input.off(Input.EventType.MOUSE_UP, this.onMouseUp, this);
          try {
            window.removeEventListener == null || window.removeEventListener('resize', this.updateActiveCamera.bind(this));
          } catch (_unused2) {}
        };
        _proto.onTouchEnd = function onTouchEnd(e) {
          if (!this.activeCamera) return;
          if (this.fsm === State.LockedOut) {
            this._emitOnThisAction = true;
            void this.closeAndInsert(true);
            return;
          }
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
          if (this.isMobile) return;
          if (!this.activeCamera || e.getButton() !== 0) return;
          if (this.fsm === State.LockedOut) {
            this._emitOnThisAction = true;
            void this.closeAndInsert(true);
            return;
          }
          if (InteractionState.inGesture && InteractionState.source === 'touch') return;
          var res = InteractionState.tryEndGesture(MOUSE_ID, 'mouse');
          if (res.wasDragged || InteractionState.consumeRecentDrag()) return;
          var p = e.getLocation();
          void this.onClick(p.x, p.y);
        }

        // ===================== CLICK FLOW =====================
        ;

        _proto.onClick = /*#__PURE__*/
        function () {
          var _onClick = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(x, y) {
            var _picked$binding$model, _this$currentBinding;
            var picked, model, L, S, biasTop, biasRest, bias, step, targetHeight, resolved, owner, b;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!(!this.activeCamera || !this.rotatingRoot || !this.layoutCtrl || !this.scrollCtrl)) {
                    _context.next = 2;
                    break;
                  }
                  return _context.abrupt("return");
                case 2:
                  if (!(this.fsm !== State.Idle)) {
                    _context.next = 4;
                    break;
                  }
                  return _context.abrupt("return");
                case 4:
                  picked = this.raycastToBindingNode(x, y);
                  if (picked) {
                    _context.next = 7;
                    break;
                  }
                  return _context.abrupt("return");
                case 7:
                  model = (_picked$binding$model = picked.binding.model) != null ? _picked$binding$model : picked.n;
                  L = this.layoutCtrl.getLevelForAny(model);
                  S = this.layoutCtrl.getSlotForAny(model);
                  if (!(L == null || S == null)) {
                    _context.next = 12;
                    break;
                  }
                  return _context.abrupt("return");
                case 12:
                  this.clickedLevel = L;
                  this.clickedSlot = S;
                  this._emitOnThisAction = true;
                  this.postPieceEvent('OPENING', L, S);
                  this.lockControls();
                  this.fsm = State.Aligning;

                  // 1) вычисляем целевую высоту центрирования (с учётом bias под ПК/мобилу)
                  biasTop = this.isMobile ? this.levelBiasTopMobile : this.levelBiasTop;
                  biasRest = this.isMobile ? this.levelBiasRestMobile : this.levelBiasRest;
                  bias = L <= 1 ? biasTop : biasRest;
                  step = this.layoutCtrl.getLevelStep();
                  targetHeight = (L + bias) * step; // 1.1) гарантируем, что targetHeight ДОСТИЖИМ:
                  //      при необходимости динамически расширяем нижний паддинг (виртуальный "низ" башни).
                  //      небольшой запас extraLevels=1, чтобы центр не прилипал к самой границе.
                  this.layoutCtrl.ensureBottomPaddingForHeight(targetHeight, /* extraLevels: */5);

                  // 1.2) скроллим точно к целевой высоте, БЕЗ внутреннего клампа
                  _context.next = 26;
                  return this.scrollCtrl.scrollToHeightWithNudgeAsync(targetHeight, this.heightCenterDuration, this.heightNudgeDuration, 'quadOut', /* clamp */false);
                case 26:
                  _context.next = 28;
                  return this.rotateRootToBringSlotToCamera(this.clickedSlot);
                case 28:
                  // 3) актуальный видимый узел + биндинг
                  resolved = this.layoutCtrl.findNodeByLevelSlot(this.clickedLevel, this.clickedSlot);
                  owner = resolved != null ? resolved : picked.n;
                  b = owner.getComponent(ClickMoveBinding) || owner.getComponentInChildren(ClickMoveBinding) || picked.binding;
                  this.currentPiece = owner;
                  this.currentBinding = b;

                  // 3.5) загрузка картинки (если включено)
                  this.applyImageToCurrentPiece(this.clickedLevel, this.clickedSlot);

                  // 4) выезд куска + бортик + анимация поворота модели
                  _context.next = 36;
                  return this.slideOutWithScaleComp();
                case 36:
                  this.setRimActive(true);
                  void this.showBloor();

                  // 5) плавный 360°+доворот и вход в idle
                  _context.next = 40;
                  return this.rotateModelOpen();
                case 40:
                  (_this$currentBinding = this.currentBinding) == null || _this$currentBinding.playSequence == null || _this$currentBinding.playSequence();
                  this.postPieceEvent('OPENED', this.clickedLevel, this.clickedSlot);
                  this._emitOnThisAction = false;
                  this.fsm = State.LockedOut;
                case 44:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function onClick(_x, _x2) {
            return _onClick.apply(this, arguments);
          }
          return onClick;
        }();
        _proto.getBloorTargetScale = function getBloorTargetScale() {
          return this.isMobile ? this.bloorScaleMobile : this.bloorScaleDesktop;
        };
        _proto.showBloor = /*#__PURE__*/function () {
          var _showBloor = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _this2 = this;
            var n, targetLocal, drv;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  n = this.bloor;
                  if (n) {
                    _context2.next = 3;
                    break;
                  }
                  return _context2.abrupt("return");
                case 3:
                  if (this.bloorTween) {
                    this.bloorTween.stop();
                    this.bloorTween = null;
                  }
                  targetLocal = this.getBloorTargetScale();
                  n.active = true;
                  // старт: X/Z = 0, Y = 1
                  n.setScale(0, 1, 0);
                  drv = {
                    t: 0
                  };
                  _context2.next = 10;
                  return new Promise(function (resolve) {
                    _this2.bloorTween = tween(drv).to(_this2.bloorScaleDuration, {
                      t: 1
                    }, {
                      easing: _this2.bloorScaleEasing,
                      onUpdate: function onUpdate() {
                        var s = drv.t * targetLocal;
                        // масштабируем только X и Z, Y держим = 1
                        n.setScale(s, 1, s);
                      }
                    }).call(function () {
                      _this2.bloorTween = null;
                      if (_this2.afterBloorObject) _this2.afterBloorObject.active = true;
                      resolve();
                    }).start();
                  });
                case 10:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function showBloor() {
            return _showBloor.apply(this, arguments);
          }
          return showBloor;
        }();
        _proto.hideBloor = /*#__PURE__*/function () {
          var _hideBloor = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var _this3 = this;
            var n, startX, startZ, drv;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  n = this.bloor;
                  if (n) {
                    _context3.next = 3;
                    break;
                  }
                  return _context3.abrupt("return");
                case 3:
                  if (this.bloorTween) {
                    this.bloorTween.stop();
                    this.bloorTween = null;
                  }

                  // текущие X/Z (могут быть неравными, учитываем оба)
                  startX = n.scale.x;
                  startZ = n.scale.z;
                  drv = {
                    t: 0
                  };
                  _context3.next = 9;
                  return new Promise(function (resolve) {
                    var _this3$bloorHideDurat;
                    _this3.bloorTween = tween(drv).to((_this3$bloorHideDurat = _this3.bloorHideDuration) != null ? _this3$bloorHideDurat : _this3.bloorScaleDuration, {
                      t: 1
                    }, {
                      easing: _this3.bloorScaleEasing,
                      onUpdate: function onUpdate() {
                        var sx = (1 - drv.t) * startX;
                        var sz = (1 - drv.t) * startZ;
                        // Y остаётся 1
                        n.setScale(sx, 1, sz);
                      }
                    }).call(function () {
                      _this3.bloorTween = null;
                      n.active = false;
                      // итоговое скрытое состояние: X/Z = 0, Y = 1
                      n.setScale(0, 1, 0);
                      resolve();
                    }).start();
                  });
                case 9:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function hideBloor() {
            return _hideBloor.apply(this, arguments);
          }
          return hideBloor;
        }();
        _proto.raycastToBindingNode = function raycastToBindingNode(sx, sy) {
          if (!this.activeCamera) return null;
          var ray = new geometry.Ray();
          this.activeCamera.screenPointToRay(sx, sy, ray);
          if (!PhysicsSystem.instance.raycastClosest(ray)) return null;
          var n = PhysicsSystem.instance.raycastClosestResult.collider.node;
          var binding = null;
          while (n && !binding) {
            binding = n.getComponent(ClickMoveBinding) || null;
            if (!binding) n = n.parent;
          }
          return n && binding ? {
            n: n,
            binding: binding
          } : null;
        }

        // ====== ROOT ROTATION TO CAMERA ======
        ;

        _proto.rotateRootToBringSlotToCamera = function rotateRootToBringSlotToCamera(slotIndex) {
          var _this4 = this;
          return new Promise(function (resolve) {
            var _this4$rotator;
            if (!_this4.rotatingRoot || !_this4.activeCamera || !_this4.layoutCtrl) {
              resolve();
              return;
            }
            var root = _this4.rotatingRoot;
            var rootPos = root.worldPosition;
            var camPos = _this4.activeCamera.node.worldPosition;
            var toCam = new Vec3(camPos.x - rootPos.x, 0, camPos.z - rootPos.z);
            if (toCam.length() < 1e-4) {
              resolve();
              return;
            }
            toCam.normalize();
            var camYaw = yawFromVecXZ(toCam);
            var stepDeg = _this4.layoutCtrl.spawn.angleStep;
            var per = Math.max(1, _this4.layoutCtrl.spawn.objectsPerLevel);
            var sShift = ((slotIndex + _this4.slotPhaseShift) % per + per) % per;
            var faceLocal = _this4.faceYawLocalDeg + (_this4.invertPieceAxis ? 180 : 0);
            var targetRootYaw = camYaw - (sShift * stepDeg + faceLocal);
            var e0 = root.eulerAngles;
            var startYaw = (e0.y % 360 + 360) % 360;
            var delta = wrapDeg(targetRootYaw - startYaw);
            if (Math.abs(delta) < 0.05 || _this4.rotateDuration <= 0) {
              root.setRotationFromEuler(e0.x, startYaw + delta, e0.z);
              resolve();
              return;
            }
            (_this4$rotator = _this4.rotator) == null || _this4$rotator.stopInertia();
            if (_this4.rotateTween) {
              _this4.rotateTween.stop();
              _this4.rotateTween = null;
            }
            var drv = {
              t: 0
            };
            _this4.rotateTween = tween(drv).to(_this4.rotateDuration, {
              t: 1
            }, {
              easing: 'quadOut',
              onUpdate: function onUpdate() {
                var y = startYaw + delta * drv.t;
                root.setRotationFromEuler(e0.x, y, e0.z);
              }
            }).call(function () {
              _this4.rotateTween = null;
              resolve();
            }).start();
          });
        }

        // ====== SLIDE WITH SCALE COMP (X,Y,Z) ======
        ;

        _proto.slideOutWithScaleComp = /*#__PURE__*/
        function () {
          var _slideOutWithScaleComp = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            var _this$currentBinding$, _parent$worldScale;
            var target, parent, ws, worldDx, worldDy, worldDz, localDx, localDy, localDz, base, to, pullPs, pullObj, _pullPs, _pullPs2, _pullPs3;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  if (!(!this.currentPiece || !this.currentBinding)) {
                    _context4.next = 2;
                    break;
                  }
                  return _context4.abrupt("return");
                case 2:
                  target = (_this$currentBinding$ = this.currentBinding.target) != null ? _this$currentBinding$ : this.currentPiece;
                  parent = target.parent;
                  ws = (_parent$worldScale = parent == null ? void 0 : parent.worldScale) != null ? _parent$worldScale : new Vec3(1, 1, 1); // Мировые смещения для X/Y/Z (разные для ПК/мобилки)
                  worldDx = this.isMobile ? this.openWorldDistanceMobile : this.openWorldDistance;
                  worldDy = this.isMobile ? this.openWorldOffsetYMobile : this.openWorldOffsetYDesktop;
                  worldDz = this.isMobile ? this.openWorldOffsetZMobile : this.openWorldOffsetZDesktop; // Пересчёт в локальные с учётом неравномерного скейла родителя
                  localDx = worldDx / Math.max(1e-6, ws.x);
                  localDy = worldDy / Math.max(1e-6, ws.y);
                  localDz = worldDz / Math.max(1e-6, ws.z); // Запоминание базовой локальной позиции
                  if (!this.baseLocalPos.has(target)) this.baseLocalPos.set(target, target.position.clone());
                  base = this.baseLocalPos.get(target).clone();
                  to = new Vec3(base.x + localDx, base.y + localDy, base.z + localDz);
                  _context4.next = 16;
                  return this.tweenLocalPos(target, to, this.slideDuration, this.slideEasing);
                case 16:
                  // партикл выезда — берём из биндинга
                  pullPs = null;
                  pullObj = this.currentBinding.pullParticleObject;
                  if (pullObj) {
                    pullObj.active = true;
                    pullPs = pullObj.getComponent(ParticleSystem);
                    try {
                      (_pullPs = pullPs) == null || _pullPs.stop();
                      (_pullPs2 = pullPs) == null || _pullPs2.clear();
                    } catch (_unused3) {}
                    try {
                      (_pullPs3 = pullPs) == null || _pullPs3.play();
                    } catch (_unused4) {}
                  }
                case 19:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));
          function slideOutWithScaleComp() {
            return _slideOutWithScaleComp.apply(this, arguments);
          }
          return slideOutWithScaleComp;
        }();
        _proto.setRimActive = function setRimActive(active) {
          var _this$currentBinding2;
          var rim = (_this$currentBinding2 = this.currentBinding) == null ? void 0 : _this$currentBinding2.rim;
          if (rim && rim.active !== active) rim.active = active;
        };
        _proto.setRimActiveFor = function setRimActiveFor(binding, active) {
          var rim = binding == null ? void 0 : binding.rim;
          if (rim && rim.active !== active) rim.active = active;
        };
        _proto.closeAndInsert = /*#__PURE__*/function () {
          var _closeAndInsert = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(emitToParent) {
            var _this$currentBinding$2, _this$currentBinding3, _this$currentBinding4;
            var pullObj, ps, L, S, _this$currentBinding$3, _this$baseLocalPos$ge, target, base, ctl, _this$currentBinding$4, targetNode;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  if (emitToParent === void 0) {
                    emitToParent = false;
                  }
                  if (!(this.fsm !== State.LockedOut)) {
                    _context5.next = 3;
                    break;
                  }
                  return _context5.abrupt("return");
                case 3:
                  this.fsm = State.SlideIn;
                  void this.hideBloor();
                  if (this.afterBloorObject) this.afterBloorObject.active = false;
                  pullObj = (_this$currentBinding$2 = (_this$currentBinding3 = this.currentBinding) == null ? void 0 : _this$currentBinding3.pullParticleObject) != null ? _this$currentBinding$2 : null;
                  if (pullObj) {
                    ps = pullObj.getComponent(ParticleSystem);
                    try {
                      ps == null || ps.stop();
                    } catch (_unused5) {}
                    pullObj.active = false;
                  }
                  L = this.clickedLevel;
                  S = this.clickedSlot;
                  this.stopIdleAnimation();
                  _context5.next = 13;
                  return (_this$currentBinding4 = this.currentBinding) == null || _this$currentBinding4.playSequenceCloseAndReset == null ? void 0 : _this$currentBinding4.playSequenceCloseAndReset();
                case 13:
                  _context5.next = 15;
                  return this.rotateModelCloseToBaseEuler();
                case 15:
                  this.setRimActive(false);
                  if (!(this.currentPiece && this.currentBinding)) {
                    _context5.next = 21;
                    break;
                  }
                  target = (_this$currentBinding$3 = this.currentBinding.target) != null ? _this$currentBinding$3 : this.currentPiece;
                  base = (_this$baseLocalPos$ge = this.baseLocalPos.get(target)) != null ? _this$baseLocalPos$ge : target.position.clone();
                  _context5.next = 21;
                  return this.tweenLocalPos(target, base.clone(), this.slideDuration, this.slideEasing);
                case 21:
                  if (this.clearImageOnClose) {
                    ctl = ColorTextureLibrary.instance;
                    if (ctl && this.currentPiece && this.currentBinding) {
                      targetNode = (_this$currentBinding$4 = this.currentBinding.model) != null ? _this$currentBinding$4 : this.currentPiece;
                      ctl.clearAppliedTexture(targetNode, this.imageMatIndex, this.imageUniform);
                    }
                  }
                  this.unlockControls();
                  this.currentPiece = null;
                  this.currentBinding = null;
                  this.fsm = State.Idle;
                  if (emitToParent) this.postPieceEvent('CLOSED', L, S);
                  this._emitOnThisAction = false;
                case 28:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this);
          }));
          function closeAndInsert(_x3) {
            return _closeAndInsert.apply(this, arguments);
          }
          return closeAndInsert;
        }() /** Единый источник правды — как в postPieceEvent */;
        _proto.getUrlForPiece = function getUrlForPiece(level, slot) {
          var lc = this.layoutCtrl;
          if (!lc) return null;
          try {
            var _file;
            var di = lc.levelSlotToDataIndex(level, slot);
            if (di < 0) return null;
            var piece = lc.getPieceByDataIndex(di);
            var url = (_file = piece == null ? void 0 : piece.file) != null ? _file : null;
            return url;
          } catch (_unused6) {
            return null;
          }
        };
        _proto.tweenLocalX = function tweenLocalX(node, toX, duration, easing) {
          return new Promise(function (resolve) {
            var startX = node.position.x;
            if (Math.abs(toX - startX) < 1e-4 || duration <= 0) {
              var p = node.position.clone();
              p.x = toX;
              node.setPosition(p);
              resolve();
              return;
            }
            var start = node.position.clone();
            var drv = {
              t: 0
            };
            tween(drv).to(duration, {
              t: 1
            }, {
              easing: easing,
              onUpdate: function onUpdate() {
                var p = node.position.clone();
                p.x = start.x + (toX - start.x) * drv.t;
                node.setPosition(p);
              }
            }).call(function () {
              return resolve();
            }).start();
          });
        }

        // === Новый универсальный твинг локальной позиции (x,y,z)
        ;

        _proto.tweenLocalPos = function tweenLocalPos(node, to, duration, easing) {
          return new Promise(function (resolve) {
            var start = node.position.clone();
            var delta = to.clone().subtract(start);
            if (delta.length() < 1e-4 || duration <= 0) {
              node.setPosition(to);
              resolve();
              return;
            }
            var drv = {
              t: 0
            };
            tween(drv).to(duration, {
              t: 1
            }, {
              easing: easing,
              onUpdate: function onUpdate() {
                var p = new Vec3(start.x + (to.x - start.x) * drv.t, start.y + (to.y - start.y) * drv.t, start.z + (to.z - start.z) * drv.t);
                node.setPosition(p);
              }
            }).call(function () {
              return resolve();
            }).start();
          });
        }

        // ====== MODEL ROTATION OPEN/CLOSE ======
        ;

        _proto.rotateModelOpen = /*#__PURE__*/
        function () {
          var _rotateModelOpen = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
            var model, deltaYaw, totalDur;
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  if (this.currentBinding) {
                    _context6.next = 2;
                    break;
                  }
                  return _context6.abrupt("return");
                case 2:
                  model = this.currentBinding.model;
                  if (model) {
                    _context6.next = 5;
                    break;
                  }
                  return _context6.abrupt("return");
                case 5:
                  if (!this.modelBaseEuler.has(model)) this.modelBaseEuler.set(model, model.eulerAngles.clone());
                  deltaYaw = 360 + this.modelExtraYawDeg;
                  totalDur = this.modelSpin360Duration + this.modelExtraYawDuration;
                  _context6.next = 10;
                  return this.rotateModelYawByUnwrapped(model, deltaYaw, totalDur, this.modelSpinEasing);
                case 10:
                  // мягкий вход в idle: начнём с нулевой амплитуды
                  this._idleAmpMulStart = 0.0;
                  this.startIdleAnimation(model);
                case 12:
                case "end":
                  return _context6.stop();
              }
            }, _callee6, this);
          }));
          function rotateModelOpen() {
            return _rotateModelOpen.apply(this, arguments);
          }
          return rotateModelOpen;
        }();
        _proto.rotateModelCloseToBaseEuler = /*#__PURE__*/function () {
          var _rotateModelCloseToBaseEuler = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
            var _this$modelBaseEuler$;
            var model, target;
            return _regeneratorRuntime().wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  if (this.currentBinding) {
                    _context7.next = 2;
                    break;
                  }
                  return _context7.abrupt("return");
                case 2:
                  model = this.currentBinding.model;
                  if (model) {
                    _context7.next = 5;
                    break;
                  }
                  return _context7.abrupt("return");
                case 5:
                  target = (_this$modelBaseEuler$ = this.modelBaseEuler.get(model)) != null ? _this$modelBaseEuler$ : model.eulerAngles.clone();
                  _context7.next = 8;
                  return this.rotateModelToEuler(model, target, this.modelRotateDuration, this.modelRotateEasing);
                case 8:
                case "end":
                  return _context7.stop();
              }
            }, _callee7, this);
          }));
          function rotateModelCloseToBaseEuler() {
            return _rotateModelCloseToBaseEuler.apply(this, arguments);
          }
          return rotateModelCloseToBaseEuler;
        }();
        _proto.rotateModelYawByUnwrapped = function rotateModelYawByUnwrapped(model, deltaYaw, duration, easing) {
          var _this5 = this;
          return new Promise(function (resolve) {
            var e0 = model.eulerAngles;
            var startYaw = e0.y;
            var endYaw = startYaw + deltaYaw;
            if (Math.abs(deltaYaw) < 0.05 || duration <= 0) {
              model.setRotationFromEuler(e0.x, endYaw, e0.z);
              resolve();
              return;
            }
            if (_this5.modelTween) {
              _this5.modelTween.stop();
              _this5.modelTween = null;
            }
            var drv = {
              t: 0
            };
            _this5.modelTween = tween(drv).to(duration, {
              t: 1
            }, {
              easing: easing,
              onUpdate: function onUpdate() {
                var y = startYaw + deltaYaw * drv.t;
                model.setRotationFromEuler(e0.x, y, e0.z);
              }
            }).call(function () {
              _this5.modelTween = null;
              resolve();
            }).start();
          });
        };
        _proto.rotateModelToEuler = function rotateModelToEuler(model, targetEuler, duration, easing) {
          var _this6 = this;
          return new Promise(function (resolve) {
            var e0 = model.eulerAngles;
            var sx = (e0.x % 360 + 360) % 360;
            var sy = (e0.y % 360 + 360) % 360;
            var sz = (e0.z % 360 + 360) % 360;
            var tx = (targetEuler.x % 360 + 360) % 360;
            var ty = (targetEuler.y % 360 + 360) % 360;
            var tz = (targetEuler.z % 360 + 360) % 360;
            var dx = wrapDeg(tx - sx);
            var dy = wrapDeg(ty - sy);
            var dz = wrapDeg(tz - sz);
            if (Math.abs(dx) + Math.abs(dy) + Math.abs(dz) < 0.05 || duration <= 0) {
              model.setRotationFromEuler(sx + dx, sy + dy, sz + dz);
              resolve();
              return;
            }
            if (_this6.modelTween) {
              _this6.modelTween.stop();
              _this6.modelTween = null;
            }
            var drv = {
              t: 0
            };
            _this6.modelTween = tween(drv).to(duration, {
              t: 1
            }, {
              easing: easing,
              onUpdate: function onUpdate() {
                model.setRotationFromEuler(sx + dx * drv.t, sy + dy * drv.t, sz + dz * drv.t);
              }
            }).call(function () {
              _this6.modelTween = null;
              resolve();
            }).start();
          });
        }

        // ====== IDLE ANIMATION (smooth handoff) ======
        ;

        _proto.startIdleAnimation = function startIdleAnimation(model) {
          var _this$idlePhaseY,
            _this7 = this,
            _this$_idleAmpMulStar;
          if (!this.enableIdleAnimation) return;
          if (this.idleTween) {
            this.idleTween.stop();
            this.idleTween = null;
          }
          var TAU = Math.PI * 2;
          var phaseYShift = (_this$idlePhaseY = this.idlePhaseY) != null ? _this$idlePhaseY : Math.PI / 3;

          // база — поза на момент старта idle
          var base = model.eulerAngles.clone();
          var curr = model.eulerAngles.clone();

          // анти-wrap
          var nearestAngleDeg = function nearestAngleDeg(prev, cand) {
            var c = cand;
            var d0 = c - prev,
              d1 = c + 360 - prev,
              d2 = c - 360 - prev;
            var ad0 = Math.abs(d0),
              ad1 = Math.abs(d1),
              ad2 = Math.abs(d2);
            if (ad1 < ad0 && ad1 <= ad2) c += 360;else if (ad2 < ad0 && ad2 < ad1) c -= 360;
            return c;
          };
          var ping01 = function ping01(phi) {
            return (1 - Math.cos(phi)) * 0.5;
          };

          // окно пинг-понга вокруг base.y
          var yMinAbs = base.y + Math.min(this.idleYRangeMinDeg, this.idleYRangeMaxDeg);
          var yMaxAbs = base.y + Math.max(this.idleYRangeMinDeg, this.idleYRangeMaxDeg);
          var span = yMaxAbs - yMinAbs;
          var mid = (yMinAbs + yMaxAbs) * 0.5;
          var nShift = Math.round((curr.y - mid) / 360);
          yMinAbs += 360 * nShift;
          yMaxAbs += 360 * nShift;

          // подобрать стартовую фазу
          var clamp = function clamp(v, a, b) {
            return Math.min(Math.max(v, a), b);
          };
          var y0Clamped = clamp(curr.y, yMinAbs, yMaxAbs);
          var t0 = span > 1e-6 ? (y0Clamped - yMinAbs) / Math.max(1e-6, span) : 0.0;
          var phiA = Math.acos(Math.max(-1, Math.min(1, 1 - 2 * t0)));
          var phiB = TAU - phiA;
          var yTargetAt = function yTargetAt(phi) {
            var py = phi * _this7.idleYRangeSpeed;
            var yPingAbs = _this7.idleYRangeEnabled ? yMinAbs + span * ping01(py) : base.y;
            var yPingOffset = yPingAbs - base.y;
            return base.y + yPingOffset + _this7.idleAmpY * Math.sin(phi + phaseYShift);
          };
          var distA = Math.abs(yTargetAt(phiA) - curr.y);
          var distB = Math.abs(yTargetAt(phiB) - curr.y);

          // 👇 выбор ближнего или дальнего угла
          var startPhase = this.idleStartFar ? distA > distB ? phiA : phiB // дальний
          : distA <= distB ? phiA : phiB; // ближний

          // драйвер твина
          var drv = {
            phase: startPhase,
            t: 0,
            ampMul: (_this$_idleAmpMulStar = this._idleAmpMulStart) != null ? _this$_idleAmpMulStar : 0.0
          };

          // easing для мягкого входа амплитуды
          var easeInBlend = function easeInBlend(x) {
            var y = 1 - (1 - x) * (1 - x); // quadOut
            if (_this7.idleBlendCurve > 0) {
              var k = _this7.idleBlendCurve;
              y = (1 - k) * y + k * Math.pow(y, 1.5);
            }
            return y;
          };
          var prevX = curr.x,
            prevY = curr.y,
            prevZ = curr.z;
          model.setRotationFromEuler(prevX, prevY, prevZ);
          this.idleTween = tween(drv).repeatForever(tween(drv).by(this.idleCycleSeconds, {
            phase: TAU,
            t: this.idleCycleSeconds
          }, {
            easing: 'linear',
            onUpdate: function onUpdate() {
              var p = drv.phase;

              // амплитуда 0→1
              var raw = _this7.idleBlendInSeconds > 0 ? Math.min(1, drv.t / _this7.idleBlendInSeconds) : 1;
              drv.ampMul = easeInBlend(raw);
              var xSin = _this7.idleAmpX * Math.sin(p);
              var ySin = _this7.idleAmpY * Math.sin(p + phaseYShift);
              var zSin = _this7.idleAmpZ * Math.sin(p + Math.PI / 5);
              var py = p * _this7.idleYRangeSpeed;
              var yPingAbs = _this7.idleYRangeEnabled ? yMinAbs + span * ping01(py) : base.y;
              var yPingOffset = yPingAbs - base.y;

              // итог: база + offset*ampMul
              var tx = base.x + drv.ampMul * xSin;
              var ty = base.y + drv.ampMul * (yPingOffset + ySin);
              var tz = base.z + drv.ampMul * zSin;
              tx = nearestAngleDeg(prevX, tx);
              ty = nearestAngleDeg(prevY, ty);
              tz = nearestAngleDeg(prevZ, tz);
              model.setRotationFromEuler(tx, ty, tz);
              prevX = tx;
              prevY = ty;
              prevZ = tz;
            }
          })).start();
        };
        _proto.stopIdleAnimation = function stopIdleAnimation() {
          if (this.idleTween) {
            this.idleTween.stop();
            this.idleTween = null;
          }
        }

        // ====== UTILS ======
        ;

        _proto.lockControls = function lockControls() {
          var _this$rotator;
          (_this$rotator = this.rotator) == null || _this$rotator.stopInertia();
          if (this.rotator) this.rotator.enabled = false;
          if (this.scrollCtrl) {
            this.scrollCtrl.setInputEnabled(false);
            this.scrollCtrl.stopAll();
          }
          InteractionState.hardReset == null || InteractionState.hardReset();
        };
        _proto.unlockControls = function unlockControls() {
          if (this.rotator) this.rotator.enabled = true;
          if (this.scrollCtrl) this.scrollCtrl.setInputEnabled(true);
          InteractionState.hardReset == null || InteractionState.hardReset();
        }

        // ====== EVENTS TO PARENT ======
        ;

        _proto.safePostToParent = function safePostToParent(msg) {
          var origin = this.parentOrigin && this.parentOrigin.trim().length ? this.parentOrigin : '*';
          try {
            var _parent;
            (_parent = window.parent) == null || _parent.postMessage(msg, origin);
          } catch (_unused7) {}
        };
        _proto.buildPiecePayload = function buildPiecePayload(level, slot) {
          var lc = this.layoutCtrl;
          try {
            var di = lc.levelSlotToDataIndex(level, slot);
            var piece = di >= 0 ? lc.getPieceByDataIndex(di) : null;
            return {
              level: level,
              slot: slot,
              dataIndex: di,
              piece: piece
            };
          } catch (_unused8) {
            return {
              level: level,
              slot: slot
            };
          }
        };
        _proto.postPieceEvent = function postPieceEvent(type, level, slot) {
          if (!this._emitOnThisAction) return;
          var payload = this.buildPiecePayload(level, slot);
          console.log('[GM3D->parent]', type, payload);
          this.safePostToParent({
            type: type,
            payload: payload
          });
        };
        _proto.applyImageToCurrentPiece = function applyImageToCurrentPiece(level, slot) {
          if (!this.loadImageOnClick) return;
          var ctl = ColorTextureLibrary.instance;
          if (!ctl) {
            console.warn('[GCM3D] ColorTextureLibrary.instance не найден');
            return;
          }
          var owner = this.currentPiece;
          theBinding: {
            var _binding$model, _this$getPieceFor, _this$getPieceFor2, _piece$uniq_id, _this$spawn$rngSeedCo, _this$spawn, _piece$hex_color;
            var binding = this.currentBinding;
            if (!owner || !binding) break theBinding;
            var targetNode = (_binding$model = binding.model) != null ? _binding$model : owner;
            var url = this.getUrlForPiece(level, slot);
            console.log("[GCM3D] url resolved for L=" + level + " S=" + slot + ":", url);
            if (url == null) break theBinding;
            var mr = targetNode.getComponent(MeshRenderer) || targetNode.getComponentInChildren(MeshRenderer);
            if (!mr) {
              console.warn('[GCM3D] MeshRenderer not found');
              break theBinding;
            }

            // 1) берём piece, если есть
            var piece = (_this$getPieceFor = (_this$getPieceFor2 = this.getPieceFor) == null ? void 0 : _this$getPieceFor2.call(this, level, slot)) != null ? _this$getPieceFor : null;

            // 2) стабильный gidx без globalIndexOf
            var gidx = this._makeStableGidx(level, slot, (_piece$uniq_id = piece == null ? void 0 : piece.uniq_id) != null ? _piece$uniq_id : null);

            // 3) резолв темы: hex_color = имя темы; если нет — рандом по seed+gidx
            var seed = ((_this$spawn$rngSeedCo = (_this$spawn = this.spawn) == null ? void 0 : _this$spawn.rngSeedColors) != null ? _this$spawn$rngSeedCo : 987654321) >>> 0;
            var theme = ctl.resolveTheme((_piece$hex_color = piece == null ? void 0 : piece.hex_color) != null ? _piece$hex_color : null, seed, gidx);

            // 4) грузим URL только в mat1; при фейле — ставим sideTexture темы
            void ctl.applyMainTextureFromUrlOrThemeSide(mr, url, theme).then(function (status) {
              console.log('[GCM3D] texture apply status:', status);
            });
          }
        }

        /** Делаем детерминированный индекс для выбора темы/паттерна без доступа к Tower */;
        _proto._makeStableGidx = function _makeStableGidx(level, slot, uuid) {
          // если есть UUID — используем его хеш (FNV-1a 32-bit)
          if (uuid && typeof uuid === 'string') return this._fnv1a32(uuid);

          // иначе просто кодируем (level, slot) в 32 бита: [level:16 | slot:16]
          var g = ((level & 0xffff) << 16 | slot & 0xffff) >>> 0;
          return g;
        }

        /** Простой FNV-1а 32-bit для строк (стабильный и быстрый) */;
        _proto._fnv1a32 = function _fnv1a32(s) {
          var h = 0x811c9dc5 >>> 0;
          for (var i = 0; i < s.length; i++) {
            h ^= s.charCodeAt(i);
            h = Math.imul(h, 0x01000193) >>> 0;
          }
          return h >>> 0;
        };
        _createClass(GlobalClickManager3D, [{
          key: "isMobile",
          get: function get() {
            return sys.isMobile;
          }
        }, {
          key: "activeCamera",
          get: function get() {
            return this._activeCamera;
          }
        }]);
        return GlobalClickManager3D;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sceneCamera", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sceneCameraMobile", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "rotatingRoot", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "rotator", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "layoutCtrl", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "scrollCtrl", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "bloor", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "bloorScaleDesktop", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.85;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "bloorScaleMobile", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.0;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "bloorScaleDuration", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.2;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "bloorHideDuration", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.15;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "bloorScaleEasing", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'quadOut';
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "afterBloorObject", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "heightCenterDuration", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.35;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "heightNudgeDuration", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.10;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "rotateDuration", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.35;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "levelBiasTop", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return -3;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "levelBiasRest", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return -4;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "levelBiasTopMobile", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return -3;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "levelBiasRestMobile", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return -4;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "openWorldDistance", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.6;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "openWorldDistanceMobile", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.6;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "openWorldOffsetYDesktop", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.0;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "openWorldOffsetYMobile", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.0;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "openWorldOffsetZDesktop", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.0;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "openWorldOffsetZMobile", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.0;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "slideEasing", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'quadOut';
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "slideDuration", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.25;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "faceYawLocalDeg", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "invertPieceAxis", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "slotPhaseShift", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "modelRotateDuration", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.25;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "modelRotateEasing", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'quadOut';
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "parentOrigin", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "loadImageOnClick", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, "imageMatIndex", [_dec37], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, "imageUniform", [_dec38], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'MainTexture';
        }
      }), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, "imageFallbackExt", [_dec39], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '.jpg';
        }
      }), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, "clearImageOnClose", [_dec40], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor40 = _applyDecoratedDescriptor(_class2.prototype, "modelSpin360Duration", [_dec41], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.6;
        }
      }), _descriptor41 = _applyDecoratedDescriptor(_class2.prototype, "modelExtraYawDeg", [_dec42], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 30;
        }
      }), _descriptor42 = _applyDecoratedDescriptor(_class2.prototype, "modelExtraYawDuration", [_dec43], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.25;
        }
      }), _descriptor43 = _applyDecoratedDescriptor(_class2.prototype, "modelSpinEasing", [_dec44], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'quadOut';
        }
      }), _descriptor44 = _applyDecoratedDescriptor(_class2.prototype, "enableIdleAnimation", [_dec45], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor45 = _applyDecoratedDescriptor(_class2.prototype, "idleAmpX", [_dec46], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      }), _descriptor46 = _applyDecoratedDescriptor(_class2.prototype, "idleAmpY", [_dec47], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      }), _descriptor47 = _applyDecoratedDescriptor(_class2.prototype, "idleAmpZ", [_dec48], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      }), _descriptor48 = _applyDecoratedDescriptor(_class2.prototype, "idleCycleSeconds", [_dec49], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 3.0;
        }
      }), _descriptor49 = _applyDecoratedDescriptor(_class2.prototype, "idleYRangeEnabled", [_dec50], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor50 = _applyDecoratedDescriptor(_class2.prototype, "idleYRangeMinDeg", [_dec51], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return -10;
        }
      }), _descriptor51 = _applyDecoratedDescriptor(_class2.prototype, "idleYRangeMaxDeg", [_dec52], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      }), _descriptor52 = _applyDecoratedDescriptor(_class2.prototype, "idlePhaseY", [_dec53], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Math.PI / 3;
        }
      }), _descriptor53 = _applyDecoratedDescriptor(_class2.prototype, "idleBlendInSeconds", [_dec54], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.4;
        }
      }), _descriptor54 = _applyDecoratedDescriptor(_class2.prototype, "idleBlendCurve", [_dec55], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.0;
        }
      }), _descriptor55 = _applyDecoratedDescriptor(_class2.prototype, "idleYRangeSpeed", [_dec56], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.0;
        }
      }), _descriptor56 = _applyDecoratedDescriptor(_class2.prototype, "idleStartFar", [_dec57], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
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

System.register("chunks:///_virtual/main", ['./ArcTextMesh.ts', './AddCake.ts', './AutoScaleCameraPosition.ts', './CakeApiExample.ts', './CameraTuner.ts', './ClickMoveBinding.ts', './ColorLibrary.ts', './GlobalClickManager.ts', './InteractionState.ts', './PlatformCameraSwitcher.ts', './PointerIds.ts', './RotateYByKeys.ts', './StartApp.ts', './TVS_SpawnLayout.ts', './TowerScrollController.ts', './ArcTextColorTest.ts', './DebugPanelToggle.ts', './PieceSpawner.ts', './RemoteTextureToMaterial.ts', './TowerQueriesTester.ts', './cake.types.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/PieceSpawner.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ColorLibrary.ts', './ClickMoveBinding.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _createClass, cclegacy, _decorator, Prefab, instantiate, Vec3, Component, ColorTextureLibrary, ClickMoveBinding;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
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
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13;
      cclegacy._RF.push({}, "7c11fA6KKdNXKI0ygDDYDbj", "PieceSpawner", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        executeInEditMode = _decorator.executeInEditMode,
        menu = _decorator.menu;
      var PieceSpawner = exports('PieceSpawner', (_dec = ccclass('PieceSpawner'), _dec2 = executeInEditMode(), _dec3 = menu('Custom/Piece Spawner'), _dec4 = property({
        type: Prefab
      }), _dec5 = property({
        type: ColorTextureLibrary,
        tooltip: 'Библиотека цветов/текстур'
      }), _dec6 = property({
        tooltip: 'Индекс материала в MeshRenderer'
      }), _dec7 = property({
        group: {
          name: 'Editor'
        }
      }), _dec8 = property({
        group: {
          name: 'Editor'
        }
      }), _dec9 = property({
        group: {
          name: 'Editor'
        }
      }), _dec10 = property({
        visible: true,
        group: {
          name: 'Editor'
        }
      }), _dec11 = property({
        visible: true,
        group: {
          name: 'Editor'
        }
      }), _dec12 = property({
        visible: true,
        group: {
          name: 'Editor'
        }
      }), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PieceSpawner, _Component);
        function PieceSpawner() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "prefab", _descriptor, _assertThisInitialized(_this));
          // 👇 Добавляем явную ссылку на библиотеку цветов (перетащить в инспекторе)
          _initializerDefineProperty(_this, "colorLib", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "totalObjects", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "objectsPerLevel", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "angleStep", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "baseScale", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "levelScaleFactor", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "baseHeight", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "levelPadding", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "materialIndex", _descriptor10, _assertThisInitialized(_this));
          // ==== Псевдо-кнопки в инспекторе ====
          _initializerDefineProperty(_this, "_spawnNow", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_clearNow", _descriptor12, _assertThisInitialized(_this));
          // необязательно, но удобно: перекрасить без пересоздания
          _initializerDefineProperty(_this, "_recolorNow", _descriptor13, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = PieceSpawner.prototype;
        // ==== конец блока псевдо-кнопок ====
        _proto.start = function start() {
          this.spawnObjects();
        };
        _proto.clearSpawned = function clearSpawned() {
          this.node.removeAllChildren();
        };
        _proto.levelYOffset = function levelYOffset(level) {
          if (level <= 0) return 0;
          var H0 = this.baseHeight * this.baseScale;
          var f = this.levelScaleFactor;
          var sumHeights = Math.abs(1 - f) < 1e-6 ? level * H0 : H0 * (1 - Math.pow(f, level)) / (1 - f);
          return sumHeights + level * this.levelPadding;
        };
        _proto.getLib = function getLib() {
          var _ref, _this$colorLib;
          return (_ref = (_this$colorLib = this.colorLib) != null ? _this$colorLib : ColorTextureLibrary.instance) != null ? _ref : null;
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
            obj.name = "Piece_" + i;
            obj.setParent(this.node);
            var y = this.levelYOffset(level);
            obj.setPosition(new Vec3(0, y, 0));
            obj.setRotationFromEuler(new Vec3(0, i * this.angleStep, 0));
            obj.setScale(scale, scale, scale);
            this.applyColorToNode(obj);
          }
        };
        _proto.applyColorsToChildren = function applyColorsToChildren() {
          for (var _iterator = _createForOfIteratorHelperLoose(this.node.children), _step; !(_step = _iterator()).done;) {
            var child = _step.value;
            this.applyColorToNode(child);
          }
        };
        _proto.applyColorToNode = function applyColorToNode(n) {
          var binding = n.getComponent(ClickMoveBinding);
          var lib = this.getLib();
          if (!(binding != null && binding.meshRenderer) || !lib) return;

          // важно для редактора: использовать материал-инстанс, чтобы не трогать shared material
          var mr = binding.meshRenderer;
          // getMaterialInstance создаёт инстанс для пер-объектных правок
          mr.getMaterialInstance(this.materialIndex);
          lib.applyRandomSet(mr, this.materialIndex);
        };
        _createClass(PieceSpawner, [{
          key: "SpawnInEditor",
          get: function get() {
            return this._spawnNow;
          },
          set: function set(v) {
            if (!v) return;
            this.clearSpawned();
            this.spawnObjects();
            this._spawnNow = false;
          }
        }, {
          key: "ClearSpawned",
          get: function get() {
            return this._clearNow;
          },
          set: function set(v) {
            if (!v) return;
            this.clearSpawned();
            this._clearNow = false;
          }
        }, {
          key: "RecolorInEditor",
          get: function get() {
            return this._recolorNow;
          },
          set: function set(v) {
            if (!v) return;
            this.applyColorsToChildren();
            this._recolorNow = false;
          }
        }]);
        return PieceSpawner;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "prefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "colorLib", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "totalObjects", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 24;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "objectsPerLevel", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 8;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "angleStep", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 45;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "baseScale", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "levelScaleFactor", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.9;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "baseHeight", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "levelPadding", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "materialIndex", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "_spawnNow", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "_clearNow", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "_recolorNow", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "SpawnInEditor", [_dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "SpawnInEditor"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "ClearSpawned", [_dec11], Object.getOwnPropertyDescriptor(_class2.prototype, "ClearSpawned"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "RecolorInEditor", [_dec12], Object.getOwnPropertyDescriptor(_class2.prototype, "RecolorInEditor"), _class2.prototype)), _class2)) || _class) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PlatformCameraSwitcher.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, sys, Component;
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
      sys = module.sys;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "339078DsVBDcqU199OGeGSu", "PlatformCameraSwitcher", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var MobileOrDesktopSwitcher = exports('MobileOrDesktopSwitcher', (_dec = ccclass('MobileOrDesktopSwitcher'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MobileOrDesktopSwitcher, _Component);
        function MobileOrDesktopSwitcher() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "mobileRoot", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "desktopRoot", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = MobileOrDesktopSwitcher.prototype;
        _proto.start = function start() {
          var isMobile = sys.isMobile;
          if (this.mobileRoot) this.mobileRoot.active = isMobile;
          if (this.desktopRoot) this.desktopRoot.active = !isMobile;
        };
        return MobileOrDesktopSwitcher;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mobileRoot", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "desktopRoot", [_dec3], {
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

System.register("chunks:///_virtual/RemoteTextureToMaterial.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, RenderableComponent, Component, Material, Texture2D, ImageAsset;
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
      RenderableComponent = module.RenderableComponent;
      Component = module.Component;
      Material = module.Material;
      Texture2D = module.Texture2D;
      ImageAsset = module.ImageAsset;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "eb3cahjlTZI1qWPqNcjurEl", "RemoteTextureToMaterial", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /** ����������� raw base64 � data URL. */
      function toDataURL(input, mime) {
        if (mime === void 0) {
          mime = 'image/png';
        }
        if (input.startsWith('data:')) return input; // ��� data URL
        // ���� �������� ������ �������� base64-������ ��� ���������:
        return "data:" + mime + ";base64," + input;
      }

      /** ������ ImageAsset �� data URL, ��� loadRemote (������� CORS ��� WebGL). */
      function dataURLToImageAsset(_x) {
        return _dataURLToImageAsset.apply(this, arguments);
      }
      /** �������� Texture2D �� data URL. */
      function _dataURLToImageAsset() {
        _dataURLToImageAsset = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(dataURL) {
          var res, blob, bitmap, imgEl;
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                if (!('createImageBitmap' in window)) {
                  _context3.next = 11;
                  break;
                }
                _context3.next = 3;
                return fetch(dataURL);
              case 3:
                res = _context3.sent;
                _context3.next = 6;
                return res.blob();
              case 6:
                blob = _context3.sent;
                _context3.next = 9;
                return createImageBitmap(blob);
              case 9:
                bitmap = _context3.sent;
                return _context3.abrupt("return", new ImageAsset(bitmap));
              case 11:
                _context3.next = 13;
                return new Promise(function (resolve, reject) {
                  var img = new Image();
                  img.onload = function () {
                    return resolve(img);
                  };
                  img.onerror = reject;
                  img.src = dataURL;
                });
              case 13:
                imgEl = _context3.sent;
                return _context3.abrupt("return", new ImageAsset(imgEl));
              case 15:
              case "end":
                return _context3.stop();
            }
          }, _callee3);
        }));
        return _dataURLToImageAsset.apply(this, arguments);
      }
      function dataURLToTexture(_x2) {
        return _dataURLToTexture.apply(this, arguments);
      }
      function _dataURLToTexture() {
        _dataURLToTexture = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(dataURL) {
          var imageAsset, tex;
          return _regeneratorRuntime().wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return dataURLToImageAsset(dataURL);
              case 2:
                imageAsset = _context4.sent;
                tex = new Texture2D();
                tex.image = imageAsset;
                return _context4.abrupt("return", tex);
              case 6:
              case "end":
                return _context4.stop();
            }
          }, _callee4);
        }));
        return _dataURLToTexture.apply(this, arguments);
      }
      var ReplaceTextureFromBase64 = exports('ReplaceTextureFromBase64', (_dec = ccclass('ReplaceTextureFromBase64'), _dec2 = property({
        tooltip: '���� ����� �������� data URL ��� �������� base64-������'
      }), _dec3 = property({
        tooltip: 'MIME ��� ��� ����� base64 (���� �� data:). �������� image/png, image/jpeg, image/webp'
      }), _dec4 = property({
        type: RenderableComponent,
        tooltip: '������-��������� � ��� ����������� ����������'
      }), _dec5 = property({
        tooltip: '��� texture-������� (albedoMap | mainTexture � �.�.)'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ReplaceTextureFromBase64, _Component);
        function ReplaceTextureFromBase64() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "base64Input", _descriptor, _assertThisInitialized(_this));
          // ������������ � data:..., � ������ base64
          _initializerDefineProperty(_this, "mimeHint", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "target", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "uniformName", _descriptor4, _assertThisInitialized(_this));
          _this._tex = void 0;
          return _this;
        }
        var _proto = ReplaceTextureFromBase64.prototype;
        _proto.onLoad = function onLoad() {
          if (!this.target) {
            this.target = this.getComponent(RenderableComponent);
          }
        };
        _proto.start = /*#__PURE__*/function () {
          var _start = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (this.base64Input) {
                    _context.next = 2;
                    break;
                  }
                  return _context.abrupt("return");
                case 2:
                  _context.prev = 2;
                  _context.next = 5;
                  return this.applyBase64(this.base64Input, this.mimeHint);
                case 5:
                  _context.next = 10;
                  break;
                case 7:
                  _context.prev = 7;
                  _context.t0 = _context["catch"](2);
                  console.error('[ReplaceTextureFromBase64] failed:', _context.t0);
                case 10:
                case "end":
                  return _context.stop();
              }
            }, _callee, this, [[2, 7]]);
          }));
          function start() {
            return _start.apply(this, arguments);
          }
          return start;
        }() /** ��������� �����: ����� ������� � �������� � ��������� ��������. */;
        _proto.applyBase64 = /*#__PURE__*/
        function () {
          var _applyBase = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(base64OrDataURL, mime) {
            var dataURL, mat, _this$target$sharedMa, shared;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (mime === void 0) {
                    mime = 'image/png';
                  }
                  dataURL = toDataURL(base64OrDataURL, mime); // �������� Texture2D ��� assetManager.loadRemote
                  _context2.next = 4;
                  return dataURLToTexture(dataURL);
                case 4:
                  this._tex = _context2.sent;
                  // ����������� ������� ���������
                  mat = this.target.getMaterialInstance(0);
                  if (mat) {
                    _context2.next = 12;
                    break;
                  }
                  shared = (_this$target$sharedMa = this.target.sharedMaterials) == null ? void 0 : _this$target$sharedMa[0];
                  if (shared) {
                    _context2.next = 10;
                    break;
                  }
                  throw new Error('� ������� ��� ���������');
                case 10:
                  mat = new Material(shared); // ��������� ��� 3.x (������ clone)
                  this.target.setMaterial(mat, 0);
                case 12:
                  // ��������� ��������
                  mat.setProperty(this.uniformName, this._tex);
                case 13:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function applyBase64(_x3, _x4) {
            return _applyBase.apply(this, arguments);
          }
          return applyBase64;
        }();
        _proto.onDestroy = function onDestroy() {
          if (this._tex) {
            var img = this._tex.image;
            if (img != null && img.decRef) img.decRef();
            this._tex.destroy();
            this._tex = undefined;
          }
        };
        return ReplaceTextureFromBase64;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "base64Input", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "mimeHint", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'image/png';
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "target", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "uniformName", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'albedoMap';
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
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
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
      }), _dec8 = property({
        tooltip: 'Градусов на 1 «тик» колесика/тачпада (delta=120). Для трекпада подберите 0.5–2.5'
      }), _dec9 = property({
        tooltip: 'Фильтр мелких движений трекпада: минимальный поворот (°) за событие'
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
          _initializerDefineProperty(_this, "degPerWheelTick", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "wheelMinStepDeg", _descriptor8, _assertThisInitialized(_this));
          // --- клавиатура
          _this.keyDir = 0;
          _this.kbAccumDeg = 0;
          _this.kbActive = false;
          // удержания для A/← и D/→
          _this.keyLeftHeld = false;
          _this.keyRightHeld = false;
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
        _proto._recalcKeyDir = function _recalcKeyDir() {
          var dir = (this.keyRightHeld ? 1 : 0) + (this.keyLeftHeld ? -1 : 0);
          this.keyDir = dir;
          if (this.keyDir === 0) {
            this.kbAccumDeg = 0;
            this.kbActive = false;
          }
        };
        // градусы за кадр из поинтера (drag/тач/тачпад)
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
          this.keyLeftHeld = false;
          this.keyRightHeld = false;
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

          // НОВОЕ: трекпад/колесо с горизонтальным скроллом
          input.on(Input.EventType.MOUSE_WHEEL, this.onWheel, this);
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
          input.off(Input.EventType.MOUSE_WHEEL, this.onWheel, this);
        }

        // === клавиатура
        ;

        _proto.onKeyDown = function onKeyDown(e) {
          var _e$event;
          (_e$event = e.event) == null || _e$event.preventDefault == null || _e$event.preventDefault();
          switch (e.keyCode) {
            case KeyCode.KEY_A:
            case KeyCode.ARROW_LEFT:
              this.keyLeftHeld = true;
              break;
            case KeyCode.KEY_D:
            case KeyCode.ARROW_RIGHT:
              this.keyRightHeld = true;
              break;
            default:
              return;
          }
          this._recalcKeyDir();
        };
        _proto.onKeyUp = function onKeyUp(e) {
          var _e$event2;
          (_e$event2 = e.event) == null || _e$event2.preventDefault == null || _e$event2.preventDefault();
          switch (e.keyCode) {
            case KeyCode.KEY_A:
            case KeyCode.ARROW_LEFT:
              this.keyLeftHeld = false;
              break;
            case KeyCode.KEY_D:
            case KeyCode.ARROW_RIGHT:
              this.keyRightHeld = false;
              break;
            default:
              return;
          }
          this._recalcKeyDir();
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

        // === ТРЕКПАД/КОЛЕСО: горизонтальный двухпальцевый скролл → поворот
        ;

        _proto.onWheel = function onWheel(e) {
          var _e$event3;
          // В вебе гасим дефолт (чтобы страница не уезжала вбок)
          (_e$event3 = e.event) == null || _e$event3.preventDefault == null || _e$event3.preventDefault();

          // На трекпадах горизонтальный жест приходит в getScrollX().
          // У классических мышей тоже может быть tilt колеса.
          var rawDx = e.getScrollX();
          if (rawDx === 0) return;

          // Нормализуем «тиковость»: 120 — стандартное колесо.
          var ticks = rawDx / 120;

          // Знак: Cocos даёт положительный dx при скролле вправо.
          var sign = this.invert ? -1 : 1;
          var deg = -ticks * this.degPerWheelTick * sign; // минус — чтобы dx>0 соответствовал повороту вправо

          // Отсечём микродребезг трекпада
          if (Math.abs(deg) < this.wheelMinStepDeg) return;

          // Кидаем в ту же трубу, что и drag/тач — сглаживание общее
          this.pendingDegFromPointer += deg;

          // Помечаем «локальную активность», чтобы корректно сбрасывалась инерция
          this.mouseActive = true;
          // Быстрый автосброс флага активности после одного кадра обрабатывается в update(), где мы проверяем локальную активность по скорости/вводу
        }

        // === апдейт / инерция
        ;

        _proto.update = function update(dt) {
          var sign = this.invert ? -1 : 1;

          // клавиатура с порогом старта
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

          // авто-затухание «активности мыши» после обработки событий колеса
          this.mouseActive = false;
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
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "degPerWheelTick", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.2;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "wheelMinStepDeg", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.1;
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

System.register("chunks:///_virtual/TowerQueriesTester.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './TVS_SpawnLayout.ts', './GlobalClickManager.ts', './ClickMoveBinding.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Component, sys, TowerLayoutController, GlobalClickManager3D, ClickMoveBinding;
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
      Component = module.Component;
      sys = module.sys;
    }, function (module) {
      TowerLayoutController = module.TowerLayoutController;
    }, function (module) {
      GlobalClickManager3D = module.GlobalClickManager3D;
    }, function (module) {
      ClickMoveBinding = module.ClickMoveBinding;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "3f79avZs1VNjqUdXTzvv1Oa", "TowerQueriesTester", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /** Урезанная модель куска, синхронная твоей API-нормализации */

      var OpenPieceBridge = exports('OpenPieceBridge', (_dec = ccclass('OpenPieceBridge'), _dec2 = property({
        type: TowerLayoutController
      }), _dec3 = property({
        type: GlobalClickManager3D
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(OpenPieceBridge, _Component);
        function OpenPieceBridge() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "layoutCtrl", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "clickMgr", _descriptor2, _assertThisInitialized(_this));
          /** Разрешённые источники сообщений (origin). Пусто = принимать от любого. */
          _this.allowedParents = new Set([
            // 'https://example.com',
            // 'https://taduar2001.github.io',
          ]);
          _this.lastBusy = null;
          _this.onMessage = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
            var data, _this$layoutCtrl$getP, _this$layoutCtrl, count, ok, _ref2, _data$payload$uniqId, _data$payload, _data$payload2, uniqId, _ok, _ref3, _ref4, _data$payload$userId, _data$payload3, _data$payload4, _data$payload5, _uniqId, _ok2, _ok3;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  console.log("Part1:" + _this.allowedParents.size + "/n" + !_this.allowedParents.has(e.origin));
                  if (!(_this.allowedParents.size && !_this.allowedParents.has(e.origin))) {
                    _context.next = 3;
                    break;
                  }
                  return _context.abrupt("return");
                case 3:
                  // console.log("Part2:" + e.source + "/n" + window.parent);
                  // if (e.source !== window.parent) return; // защита от посторонних окон
                  console.log(e);
                  data = e.data || {};
                  _context.t0 = data.type;
                  _context.next = _context.t0 === 'QUERY_BUSY' ? 8 : _context.t0 === 'QUERY_INFO' ? 10 : _context.t0 === 'OPEN_RANDOM' ? 13 : _context.t0 === 'OPEN_BY_UNIQ' ? 18 : _context.t0 === 'OPEN_BY_USER' ? 26 : _context.t0 === 'CLOSE_OPENED' ? 32 : _context.t0 === 'CLOSE_ANY' ? 32 : 37;
                  break;
                case 8:
                  _this.reply(e, 'BUSY_STATE', {
                    busy: _this.isBusy()
                  });
                  return _context.abrupt("break", 37);
                case 10:
                  count = (_this$layoutCtrl$getP = (_this$layoutCtrl = _this.layoutCtrl) == null || _this$layoutCtrl.getPiecesCount == null ? void 0 : _this$layoutCtrl.getPiecesCount()) != null ? _this$layoutCtrl$getP : 0;
                  _this.reply(e, 'INFO', {
                    piecesCount: count
                  });
                  return _context.abrupt("break", 37);
                case 13:
                  _context.next = 15;
                  return _this.openRandom();
                case 15:
                  ok = _context.sent;
                  _this.reply(e, 'OPEN_RESULT', {
                    ok: ok,
                    mode: 'random'
                  });
                  return _context.abrupt("break", 37);
                case 18:
                  console.log(data);
                  uniqId = (_ref2 = (_data$payload$uniqId = data == null || (_data$payload = data.payload) == null ? void 0 : _data$payload.uniqId) != null ? _data$payload$uniqId : data == null || (_data$payload2 = data.payload) == null ? void 0 : _data$payload2.uniq_id) != null ? _ref2 : '';
                  console.log(uniqId);
                  _context.next = 23;
                  return _this.openByUniqId(uniqId);
                case 23:
                  _ok = _context.sent;
                  _this.reply(e, 'OPEN_RESULT', {
                    ok: _ok,
                    mode: 'byUniq',
                    uniqId: uniqId
                  });
                  return _context.abrupt("break", 37);
                case 26:
                  _uniqId = (_ref3 = (_ref4 = (_data$payload$userId = data == null || (_data$payload3 = data.payload) == null ? void 0 : _data$payload3.userId) != null ? _data$payload$userId : data == null || (_data$payload4 = data.payload) == null ? void 0 : _data$payload4.uniqId) != null ? _ref4 : data == null || (_data$payload5 = data.payload) == null ? void 0 : _data$payload5.uniq_id) != null ? _ref3 : '';
                  _context.next = 29;
                  return _this.openByUniqId(_uniqId);
                case 29:
                  _ok2 = _context.sent;
                  _this.reply(e, 'OPEN_RESULT', {
                    ok: _ok2,
                    mode: 'byUniq',
                    uniqId: _uniqId,
                    deprecated: 'OPEN_BY_USER'
                  });
                  return _context.abrupt("break", 37);
                case 32:
                  _context.next = 34;
                  return _this.closeOpened();
                case 34:
                  _ok3 = _context.sent;
                  _this.reply(e, 'CLOSE_RESULT', {
                    ok: _ok3
                  });
                  return _context.abrupt("break", 37);
                case 37:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          return _this;
        }
        var _proto = OpenPieceBridge.prototype;
        // ============================ Lifecycle ============================
        _proto.onEnable = function onEnable() {
          // this.safePostToParent({ type: 'IFRAME_READY' });
          window.addEventListener('message', this.onMessage);
        };
        _proto.onDisable = function onDisable() {
          try {
            this.safePostToParent({
              type: 'IFRAME_GOING_AWAY'
            });
          } catch (_unused) {}
          window.removeEventListener('message', this.onMessage);
        };
        _proto.update = function update() {
          var busy = this.isBusy();
          if (busy !== this.lastBusy) {
            this.lastBusy = busy;
            this.safePostToParent({
              type: 'BUSY_STATE',
              payload: {
                busy: busy
              }
            });
          }
        }

        // ============================ Messaging ============================
        ;

        _proto.safePostToParent = function safePostToParent(msg, targetOrigin) {
          if (targetOrigin === void 0) {
            targetOrigin = '*';
          }
          console.log(msg);
          try {
            var _window$parent;
            (_window$parent = window.parent) == null || _window$parent.postMessage(msg, targetOrigin);
          } catch (_unused2) {}
        };
        _proto.reply = function reply(e, type, payload) {
          this.safePostToParent({
            type: type,
            payload: payload
          }, e.origin || '*');
        };
        // ============================ Helpers ============================
        _proto.isBusy = function isBusy() {
          var cm = this.clickMgr;
          return !cm || cm.fsm !== 'Idle';
        }

        /** Строим полезную нагрузку для внешних событий */;
        _proto.buildPiecePayload = function buildPiecePayload(level, slot) {
          var lc = this.layoutCtrl;
          try {
            var _piece$uniq_id, _piece$hex_color, _piece$name, _piece$filling_id, _piece$file, _piece$greeting_text;
            var di = lc.levelSlotToDataIndex(level, slot);
            var piece = di >= 0 ? lc.getPieceByDataIndex(di) : null;
            var slim = piece ? {
              uniq_id: (_piece$uniq_id = piece.uniq_id) != null ? _piece$uniq_id : null,
              hex_color: (_piece$hex_color = piece.hex_color) != null ? _piece$hex_color : null,
              name: (_piece$name = piece.name) != null ? _piece$name : null,
              filling_id: (_piece$filling_id = piece.filling_id) != null ? _piece$filling_id : null,
              file: (_piece$file = piece.file) != null ? _piece$file : null,
              greeting_text: (_piece$greeting_text = piece.greeting_text) != null ? _piece$greeting_text : null // NEW
            } : null;

            // Внешнему миру шлём slim (стабильный контракт)
            return {
              level: level,
              slot: slot,
              dataIndex: di,
              piece: slim
            };
          } catch (_unused3) {
            return {
              level: level,
              slot: slot,
              dataIndex: -1,
              piece: null
            };
          }
        }

        /** Если открыт кусочек — закрываем, чтобы открыть новый. */;
        _proto.ensureReadyForOpen = /*#__PURE__*/
        function () {
          var _ensureReadyForOpen = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var cm, level, slot, payload;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  cm = this.clickMgr;
                  if (cm) {
                    _context2.next = 3;
                    break;
                  }
                  return _context2.abrupt("return", false);
                case 3:
                  if (!(cm.fsm === 'LockedOut')) {
                    _context2.next = 20;
                    break;
                  }
                  level = cm == null ? void 0 : cm.clickedLevel;
                  slot = cm == null ? void 0 : cm.clickedSlot;
                  payload = typeof level === 'number' && typeof slot === 'number' ? this.buildPiecePayload(level, slot) : null;
                  _context2.prev = 7;
                  _context2.next = 10;
                  return cm.closeAndInsert == null ? void 0 : cm.closeAndInsert();
                case 10:
                  this.safePostToParent({
                    type: 'CLOSED',
                    payload: payload != null ? payload : {
                      level: level,
                      slot: slot
                    },
                    meta: {
                      reason: 'switch'
                    }
                  });
                  _context2.next = 17;
                  break;
                case 13:
                  _context2.prev = 13;
                  _context2.t0 = _context2["catch"](7);
                  console.warn('[OpenPieceBridge] не удалось закрыть перед открытием:', _context2.t0);
                  return _context2.abrupt("return", false);
                case 17:
                  _context2.prev = 17;
                  cm.fsm = 'Idle';
                  return _context2.finish(17);
                case 20:
                  return _context2.abrupt("return", cm.fsm === 'Idle');
                case 21:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this, [[7, 13, 17, 20]]);
          }));
          function ensureReadyForOpen() {
            return _ensureReadyForOpen.apply(this, arguments);
          }
          return ensureReadyForOpen;
        }() // ============================ Public Actions ============================
        ;

        _proto.openRandom = /*#__PURE__*/
        function () {
          var _openRandom = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var lc, cm, seed, rnd;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  lc = this.layoutCtrl;
                  cm = this.clickMgr; // Проверяем, что основные зависимости на месте (камеру берёт сам GCM)
                  if (!(!lc || !cm || !cm.scrollCtrl || !cm.rotatingRoot)) {
                    _context3.next = 4;
                    break;
                  }
                  return _context3.abrupt("return", false);
                case 4:
                  _context3.next = 6;
                  return this.ensureReadyForOpen();
                case 6:
                  if (_context3.sent) {
                    _context3.next = 8;
                    break;
                  }
                  return _context3.abrupt("return", false);
                case 8:
                  seed = Math.random() * 0xFFFFFFFF >>> 0;
                  rnd = lc.scrollToRandomPiece({
                    duration: cm.heightCenterDuration,
                    easing: 'quadOut',
                    clamp: true,
                    seed: seed
                  });
                  if (rnd) {
                    _context3.next = 12;
                    break;
                  }
                  return _context3.abrupt("return", false);
                case 12:
                  _context3.next = 14;
                  return this.openAt(rnd.level, rnd.slot);
                case 14:
                  return _context3.abrupt("return", _context3.sent);
                case 15:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function openRandom() {
            return _openRandom.apply(this, arguments);
          }
          return openRandom;
        }();
        _proto.openByUniqId = /*#__PURE__*/function () {
          var _openByUniqId = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(uniqId) {
            var lc, cm, q, hit;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  lc = this.layoutCtrl;
                  cm = this.clickMgr;
                  if (!(!lc || !cm || !cm.scrollCtrl || !cm.rotatingRoot)) {
                    _context4.next = 4;
                    break;
                  }
                  return _context4.abrupt("return", false);
                case 4:
                  _context4.next = 6;
                  return this.ensureReadyForOpen();
                case 6:
                  if (_context4.sent) {
                    _context4.next = 8;
                    break;
                  }
                  return _context4.abrupt("return", false);
                case 8:
                  q = (uniqId != null ? uniqId : '').trim();
                  if (q) {
                    _context4.next = 11;
                    break;
                  }
                  return _context4.abrupt("return", false);
                case 11:
                  hit = lc.findLevelSlotByUniqId(q);
                  if (hit) {
                    _context4.next = 15;
                    break;
                  }
                  console.warn('[OpenPieceBridge] uniq_id не найден:', q);
                  return _context4.abrupt("return", false);
                case 15:
                  lc.scrollToLevel(hit.level, {
                    duration: cm.heightCenterDuration,
                    easing: 'quadOut',
                    clamp: true
                  });
                  _context4.next = 18;
                  return this.openAt(hit.level, hit.slot);
                case 18:
                  return _context4.abrupt("return", _context4.sent);
                case 19:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));
          function openByUniqId(_x2) {
            return _openByUniqId.apply(this, arguments);
          }
          return openByUniqId;
        }();
        _proto.openAt = /*#__PURE__*/function () {
          var _openAt = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(level, slot) {
            var lc, cm, _cm$levelBiasTopMobil, _cm$levelBiasRestMobi, _cm$currentBinding, info, isMob, biasTop, biasRest, bias, step, targetHeight, owner, binding;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  lc = this.layoutCtrl;
                  cm = this.clickMgr;
                  _context5.prev = 2;
                  cm.lockControls == null || cm.lockControls();
                  cm.clickedLevel = level;
                  cm.clickedSlot = slot;
                  cm.fsm = 'Aligning';

                  // Полная инфа для внешних слушателей
                  info = this.buildPiecePayload(level, slot);
                  this.safePostToParent({
                    type: 'OPENING',
                    payload: info
                  });

                  // Центрирование с учётом мобильного/десктопного bias
                  isMob = !!sys.isMobile;
                  biasTop = isMob ? (_cm$levelBiasTopMobil = cm.levelBiasTopMobile) != null ? _cm$levelBiasTopMobil : cm.levelBiasTop : cm.levelBiasTop;
                  biasRest = isMob ? (_cm$levelBiasRestMobi = cm.levelBiasRestMobile) != null ? _cm$levelBiasRestMobi : cm.levelBiasRest : cm.levelBiasRest;
                  bias = level <= 1 ? biasTop : biasRest;
                  step = lc.getLevelStep();
                  targetHeight = (level + bias) * step;
                  _context5.next = 17;
                  return cm.scrollCtrl.scrollToHeightWithNudgeAsync(targetHeight, cm.heightCenterDuration, cm.heightNudgeDuration, 'quadOut', true);
                case 17:
                  _context5.next = 19;
                  return cm.rotateRootToBringSlotToCamera == null ? void 0 : cm.rotateRootToBringSlotToCamera(slot);
                case 19:
                  // Узел-носитель и биндинг
                  owner = lc.findNodeByLevelSlot(level, slot);
                  if (owner) {
                    _context5.next = 24;
                    break;
                  }
                  cm.unlockControls == null || cm.unlockControls();
                  cm.fsm = 'Idle';
                  return _context5.abrupt("return", false);
                case 24:
                  binding = owner.getComponent(ClickMoveBinding) || owner.getComponentInChildren(ClickMoveBinding);
                  cm.currentPiece = owner;
                  cm.currentBinding = binding;

                  // Картинка в шейдер (если включено) + блюр
                  cm.applyImageToCurrentPiece == null || cm.applyImageToCurrentPiece(level, slot);
                  _context5.next = 30;
                  return cm.slideOutWithScaleComp == null ? void 0 : cm.slideOutWithScaleComp();
                case 30:
                  cm.setRimActive == null || cm.setRimActive(true);
                  cm.showBloor == null || cm.showBloor();

                  // 360° + extra + запуск sequence + idle
                  _context5.next = 34;
                  return cm.rotateModelOpen == null ? void 0 : cm.rotateModelOpen();
                case 34:
                  (_cm$currentBinding = cm.currentBinding) == null || _cm$currentBinding.playSequence == null || _cm$currentBinding.playSequence();

                  // Готово
                  this.safePostToParent({
                    type: 'OPENED',
                    payload: info
                  });
                  cm.fsm = 'LockedOut';
                  return _context5.abrupt("return", true);
                case 40:
                  _context5.prev = 40;
                  _context5.t0 = _context5["catch"](2);
                  console.warn('[OpenPieceBridge] ошибка открытия:', _context5.t0);
                  try {
                    cm.unlockControls == null || cm.unlockControls();
                  } catch (_unused4) {}
                  cm.fsm = 'Idle';
                  this.safePostToParent({
                    type: 'OPEN_FAILED',
                    payload: {
                      level: level,
                      slot: slot,
                      error: String(_context5.t0 || 'unknown')
                    }
                  });
                  return _context5.abrupt("return", false);
                case 47:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this, [[2, 40]]);
          }));
          function openAt(_x3, _x4) {
            return _openAt.apply(this, arguments);
          }
          return openAt;
        }();
        _proto.closeOpened = /*#__PURE__*/function () {
          var _closeOpened = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
            var cm, level, slot, info;
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  cm = this.clickMgr;
                  if (cm) {
                    _context6.next = 3;
                    break;
                  }
                  return _context6.abrupt("return", false);
                case 3:
                  level = cm == null ? void 0 : cm.clickedLevel;
                  slot = cm == null ? void 0 : cm.clickedSlot;
                  info = typeof level === 'number' && typeof slot === 'number' ? this.buildPiecePayload(level, slot) : null;
                  if (!(cm.fsm === 'LockedOut')) {
                    _context6.next = 11;
                    break;
                  }
                  _context6.next = 9;
                  return cm.closeAndInsert == null ? void 0 : cm.closeAndInsert();
                case 9:
                  this.safePostToParent({
                    type: 'CLOSED',
                    payload: info != null ? info : {
                      level: level,
                      slot: slot
                    }
                  });
                  return _context6.abrupt("return", true);
                case 11:
                  return _context6.abrupt("return", false);
                case 12:
                case "end":
                  return _context6.stop();
              }
            }, _callee6, this);
          }));
          function closeOpened() {
            return _closeOpened.apply(this, arguments);
          }
          return closeOpened;
        }();
        return OpenPieceBridge;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "layoutCtrl", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "clickMgr", [_dec3], {
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

System.register("chunks:///_virtual/TowerScrollController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './InteractionState.ts', './PointerIds.ts'], function (exports) {
  var _applyDecoratedDescriptor, _createClass, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, EventTarget, input, Input, tween, KeyCode, Component, sys, InteractionState, MOUSE_ID$1;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _createClass = module.createClass;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      EventTarget = module.EventTarget;
      input = module.input;
      Input = module.Input;
      tween = module.tween;
      KeyCode = module.KeyCode;
      Component = module.Component;
      sys = module.sys;
    }, function (module) {
      InteractionState = module.InteractionState;
    }, function (module) {
      MOUSE_ID$1 = module.MOUSE_ID;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _dec21, _dec22, _class4, _class5, _descriptor20;
      cclegacy._RF.push({}, "10ce5Y/EABEKJf4+gRbbg26", "TowerScrollController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      // fallback, если нет PointerIds
      var MOUSE_ID = MOUSE_ID$1;

      /** Конфиг скролла */
      var TVS_Scroll = exports('TVS_Scroll', (_dec = ccclass('TVS_Scroll'), _dec2 = property({
        tooltip: 'Стартовый offset (ед.) для ПК'
      }), _dec3 = property({
        tooltip: 'Стартовый offset (ед.) для мобилы'
      }), _dec4 = property({
        tooltip: 'Мин. offset для ПК'
      }), _dec5 = property({
        tooltip: 'Мин. offset для мобилы'
      }), _dec6 = property({
        tooltip: 'Макс. offset'
      }), _dec7 = property({
        tooltip: 'Ед. offset на пиксель драга'
      }), _dec8 = property({
        tooltip: 'Ед. offset на шаг колёсика (120 тиков)'
      }), _dec9 = property({
        tooltip: 'Порог пикселей, после которого считаем drag и захватываем жест'
      }), _dec10 = property({
        tooltip: 'Включить инерционный доезд'
      }), _dec11 = property({
        tooltip: 'Коэф. трения (1/сек): больше — быстрее останавливается'
      }), _dec12 = property({
        tooltip: 'Порог остановки (ед./сек)'
      }), _dec13 = property({
        tooltip: 'Сила «пинка» от колеса (в скорость)'
      }), _dec14 = property({
        tooltip: 'Максимальная скорость инерции/клавиш (ед./сек)'
      }), _dec15 = property({
        tooltip: 'Deadzone для колеса (ед. offset)'
      }), _dec16 = property({
        tooltip: 'Сброс deadzone, если колёсико молчит (мс)'
      }), _dec17 = property({
        tooltip: 'Ускорение при удержании W/S (ед./сек^2)'
      }), _dec18 = property({
        tooltip: 'Макс. скорость от W/S'
      }), _dec19 = property({
        tooltip: 'Порог offset, ниже/равно которому считаем, что на самом верху (ENTERED)'
      }), _dec20 = property({
        tooltip: 'Порог offset, выше которого выходим из состояния самого верха (EXITED). Должен быть >= topEnterOffset'
      }), _dec(_class = (_class2 = /*#__PURE__*/function () {
        function TVS_Scroll() {
          // === ПК/Мобила варианты ===
          _initializerDefineProperty(this, "startOffsetPC", _descriptor, this);
          _initializerDefineProperty(this, "startOffsetMobile", _descriptor2, this);
          _initializerDefineProperty(this, "minOffsetPC", _descriptor3, this);
          _initializerDefineProperty(this, "minOffsetMobile", _descriptor4, this);
          // === Остальные настройки без изменений ===
          _initializerDefineProperty(this, "maxOffset", _descriptor5, this);
          _initializerDefineProperty(this, "unitsPerPixel", _descriptor6, this);
          _initializerDefineProperty(this, "unitsPerWheelTick", _descriptor7, this);
          _initializerDefineProperty(this, "dragThreshold", _descriptor8, this);
          _initializerDefineProperty(this, "enableInertia", _descriptor9, this);
          _initializerDefineProperty(this, "friction", _descriptor10, this);
          _initializerDefineProperty(this, "stopVelocity", _descriptor11, this);
          _initializerDefineProperty(this, "wheelKick", _descriptor12, this);
          _initializerDefineProperty(this, "maxInertiaSpeed", _descriptor13, this);
          _initializerDefineProperty(this, "wheelDeadzoneUnits", _descriptor14, this);
          _initializerDefineProperty(this, "wheelDeadzoneResetMs", _descriptor15, this);
          _initializerDefineProperty(this, "keyAccel", _descriptor16, this);
          _initializerDefineProperty(this, "keyMaxSpeed", _descriptor17, this);
          _initializerDefineProperty(this, "topEnterOffset", _descriptor18, this);
          _initializerDefineProperty(this, "topExitOffset", _descriptor19, this);
        }
        _createClass(TVS_Scroll, [{
          key: "startOffset",
          get:
          // например «чуть-чуть проскролили» на 6 ед.
          // === Геттеры для прозрачного доступа как раньше ===
          function get() {
            return sys.isMobile ? this.startOffsetMobile : this.startOffsetPC;
          }
        }, {
          key: "minOffset",
          get: function get() {
            return sys.isMobile ? this.minOffsetMobile : this.minOffsetPC;
          }
        }]);
        return TVS_Scroll;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "startOffsetPC", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "startOffsetMobile", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "minOffsetPC", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return -1e12;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "minOffsetMobile", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return -1e12;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "maxOffset", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1e12;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "unitsPerPixel", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.02;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "unitsPerWheelTick", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "dragThreshold", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 8;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "enableInertia", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "friction", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2.0;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "stopVelocity", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.002;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "wheelKick", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 20.0;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "maxInertiaSpeed", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 200;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "wheelDeadzoneUnits", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "wheelDeadzoneResetMs", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 180;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "keyAccel", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 120;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "keyMaxSpeed", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 200;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "topEnterOffset", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.0;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "topExitOffset", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 6.0;
        }
      })), _class2)) || _class));

      /**
       * TowerScrollController — отвечает только за ввод/инерцию/анимации и значение offset.
       * Эмитит события:
       *  - 'offset-changed': (offset:number)=>void
       *  - 'scroll-start'
       *  - 'scroll-end'
       */
      // рядом с импортами
      function safePostToParent(msg, targetOrigin) {
        if (targetOrigin === void 0) {
          targetOrigin = '*';
        }
        console.log(msg);
        try {
          var _window$parent;
          (_window$parent = window.parent) == null || _window$parent.postMessage(msg, targetOrigin);
        } catch (_unused) {}
      }
      var TowerScrollController = exports('TowerScrollController', (_dec21 = ccclass('TowerScrollController'), _dec22 = property({
        type: TVS_Scroll
      }), _dec21(_class4 = (_class5 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TowerScrollController, _Component);
        function TowerScrollController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "scroll", _descriptor20, _assertThisInitialized(_this));
          /** Шина событий */
          _this.events = new EventTarget();
          /** Состояние «у самого верха скролла» с гистерезисом. */
          _this.atTopEntered = null;
          // === состояние ===
          _this._offset = 0;
          _this.velocity = 0;
          // ед./сек
          _this.inertiaActive = false;
          // глобальная блокировка внешним кодом
          _this._inputEnabled = true;
          // mouse
          _this.mouseHeld = false;
          _this.mouseStartY = null;
          _this.mouseLastY = null;
          _this.mouseDragging = false;
          _this.mouseActive = false;
          _this.mouseClaimed = false;
          // touch
          _this.touchId = null;
          _this.touchStartY = null;
          _this.touchLastY = null;
          _this.touchDragging = false;
          _this.touchActive = false;
          _this.touchClaimed = false;
          // инерция после драга
          _this.moveSamples = [];
          _this.maxSamples = 6;
          // колесо
          _this.wheelAccumUnits = 0;
          _this.wheelDeadzoneLastTs = 0;
          // клавиатура
          _this.keyHeldW = false;
          _this.keyHeldS = false;
          // tween
          _this.scrollTween = null;
          _this._tweenDriver = null;
          _this._pendingResolve = null;
          return _this;
        }
        var _proto = TowerScrollController.prototype;
        // ===== lifecycle =====
        _proto.onEnable = function onEnable() {
          InteractionState.hardReset();
          input.on(Input.EventType.MOUSE_DOWN, this.onMouseDown, this);
          input.on(Input.EventType.MOUSE_MOVE, this.onMouseMove, this);
          input.on(Input.EventType.MOUSE_UP, this.onMouseUp, this);
          input.on(Input.EventType.MOUSE_WHEEL, this.onWheel, this);
          input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
          input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          input.on(Input.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
        };
        _proto.onDisable = function onDisable() {
          input.off(Input.EventType.MOUSE_DOWN, this.onMouseDown, this);
          input.off(Input.EventType.MOUSE_MOVE, this.onMouseMove, this);
          input.off(Input.EventType.MOUSE_UP, this.onMouseUp, this);
          input.off(Input.EventType.MOUSE_WHEEL, this.onWheel, this);
          input.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
          input.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          input.off(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          input.off(Input.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
          input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
        };
        _proto.start = function start() {
          this.setOffset(this.clamp(this.scroll.startOffset, this.scroll.minOffset, this.scroll.maxOffset), true);

          // первичная инициализация состояния верха
          this.updateTopEdgeEntered(this._offset, true);
        };
        _proto.update = function update(dt) {
          // если внешне заблокированы — просто гасим инерцию
          if (!this._inputEnabled) {
            this.inertiaActive = false;
            this.velocity = 0;
            return;
          }
          var interacting = this.mouseHeld || this.mouseDragging || this.mouseActive || this.touchId !== null || this.touchDragging || this.touchActive;
          if (interacting) {
            this.inertiaActive = false;
            return;
          }

          // клавиши
          var inputAccel = 0;
          if (this.keyHeldW) inputAccel -= this.scroll.keyAccel;
          if (this.keyHeldS) inputAccel += this.scroll.keyAccel;
          if (inputAccel !== 0) {
            this.velocity += inputAccel * dt;
            var vmax = Math.min(this.scroll.keyMaxSpeed, this.scroll.maxInertiaSpeed);
            this.velocity = this.clamp(this.velocity, -vmax, vmax);
            this.inertiaActive = true;
            // старт инерции — можно считать началом скролла
            this.events.emit('scroll-start');
          }
          if (!this.inertiaActive && Math.abs(this.velocity) < this.scroll.stopVelocity) return;
          var prev = this._offset;
          var next = this._offset + this.velocity * dt;
          next = this.clamp(next, this.scroll.minOffset, this.scroll.maxOffset);
          if (next <= this.scroll.minOffset && this.velocity < 0) this.velocity = 0;
          if (next >= this.scroll.maxOffset && this.velocity > 0) this.velocity = 0;

          // трение
          var decay = Math.exp(-this.scroll.friction * dt);
          this.velocity *= decay;
          if (inputAccel === 0 && Math.abs(this.velocity) < this.scroll.stopVelocity) {
            this.velocity = 0;
            if (this.inertiaActive) {
              this.inertiaActive = false;
              this.events.emit('scroll-end');
            }
          }
          if (next !== prev) this.setOffset(next, true);
        }

        // ===== публичные методы =====
        /** Немедленно выставить offset (с клэмпом). */;
        _proto.setOffset = function setOffset(height, emit) {
          if (emit === void 0) {
            emit = true;
          }
          var clamped = this.clamp(height, this.scroll.minOffset, this.scroll.maxOffset);
          if (clamped === this._offset) return;
          this._offset = clamped;
          this.updateTopEdgeEntered(this._offset);
          if (emit) this.events.emit('offset-changed', this._offset);
        }

        /** Гистерезисная логика «у самого верха скролла». */;
        _proto.updateTopEdgeEntered = function updateTopEdgeEntered(offset, forceEmitOnInit) {
          if (forceEmitOnInit === void 0) {
            forceEmitOnInit = false;
          }
          var enterTh = Math.min(this.scroll.topEnterOffset, this.scroll.topExitOffset);
          var exitTh = Math.max(this.scroll.topEnterOffset, this.scroll.topExitOffset);
          var next;
          if (this.atTopEntered === null) {
            // первое вычисление — просто по enterTh
            next = offset <= enterTh;
          } else if (this.atTopEntered) {
            // сейчас в состоянии ENTERED → выходим только если ушли выше exitTh
            next = offset <= exitTh;
          } else {
            // сейчас в состоянии EXITED → заходим только если ≤ enterTh
            next = offset <= enterTh;
          }
          if (this.atTopEntered === null) {
            this.atTopEntered = next;
            if (forceEmitOnInit) {
              safePostToParent({
                type: 'TOP4_VISIBILITY',
                state: next ? 'ENTERED' : 'EXITED'
              });
            }
            return;
          }
          if (next !== this.atTopEntered) {
            this.atTopEntered = next;
            safePostToParent({
              type: 'TOP4_VISIBILITY',
              state: next ? 'ENTERED' : 'EXITED'
            });
          }
        }

        /** Заблокировать/разблокировать пользовательский ввод. При блоке — гасит инерцию и останавливает твины. */;
        _proto.setInputEnabled = function setInputEnabled(enabled) {
          if (this._inputEnabled === enabled) return;
          this._inputEnabled = enabled;
          if (!enabled) this.stopAll();
        }

        /** Полностью остановить: инерция, твины, жесты. */;
        _proto.stopAll = function stopAll() {
          this.inertiaActive = false;
          this.velocity = 0;
          if (this.scrollTween) {
            this.scrollTween.stop();
            this.scrollTween = null;
          }
          this._tweenDriver = null;
          if (this._pendingResolve) {
            this._pendingResolve();
            this._pendingResolve = null;
          }
          // сброс жестов
          this.mouseHeld = false;
          this.mouseDragging = false;
          this.mouseActive = false;
          this.mouseClaimed = false;
          this.touchId = null;
          this.touchDragging = false;
          this.touchActive = false;
          this.touchClaimed = false;
          InteractionState.hardReset == null || InteractionState.hardReset();
        }

        /** Скролл к абсолютной высоте (в тех же единицах, что offset). */;
        _proto.scrollToHeight = function scrollToHeight(height, opts) {
          var _this2 = this;
          if (opts === void 0) {
            opts = {};
          }
          var _opts = opts,
            _opts$duration = _opts.duration,
            duration = _opts$duration === void 0 ? 0 : _opts$duration,
            _opts$easing = _opts.easing,
            easing = _opts$easing === void 0 ? 'quadOut' : _opts$easing,
            _opts$clamp = _opts.clamp,
            doClamp = _opts$clamp === void 0 ? true : _opts$clamp;
          this.inertiaActive = false;
          this.velocity = 0;
          if (this.scrollTween) {
            this.scrollTween.stop();
            this.scrollTween = null;
          }
          var target = doClamp ? this.clamp(height, this.scroll.minOffset, this.scroll.maxOffset) : height;
          if (duration <= 0) {
            this._offset = target;
            this.updateTopEdgeEntered(this._offset); // <-- важно
            this.events.emit('offset-changed', this._offset);
            this.events.emit('scroll-end');
            return;
          }
          var easeFn = typeof easing === 'function' ? easing : this._getEase(easing);
          this._tweenDriver = {
            value: this._offset
          };
          this.events.emit('scroll-start');
          this.scrollTween = tween(this._tweenDriver).to(duration, {
            value: target
          }, {
            progress: function progress(start, end, _current, t) {
              var et = easeFn(Math.max(0, Math.min(1, t)));
              return start + (end - start) * et;
            },
            onUpdate: function onUpdate() {
              _this2._offset = doClamp ? _this2.clamp(_this2._tweenDriver.value, _this2.scroll.minOffset, _this2.scroll.maxOffset) : _this2._tweenDriver.value;
              _this2.updateTopEdgeEntered(_this2._offset); // <-- важно
              _this2.events.emit('offset-changed', _this2._offset);
            }
          }).call(function () {
            _this2.scrollTween = null;
            _this2._tweenDriver = null;
            _this2.events.emit('scroll-end');
          }).start();
        }

        /** Promise-версия scrollToHeight. */;
        _proto.scrollToHeightAsync = function scrollToHeightAsync(height, opts) {
          var _this3 = this;
          if (opts === void 0) {
            opts = {};
          }
          return new Promise(function (resolve) {
            // если уже есть ждущий промис — закрываем его, чтобы не повисал
            if (_this3._pendingResolve) {
              _this3._pendingResolve();
              _this3._pendingResolve = null;
            }
            var _opts2 = opts,
              _opts2$duration = _opts2.duration,
              duration = _opts2$duration === void 0 ? 0 : _opts2$duration,
              _opts2$easing = _opts2.easing,
              easing = _opts2$easing === void 0 ? 'quadOut' : _opts2$easing,
              _opts2$clamp = _opts2.clamp,
              doClamp = _opts2$clamp === void 0 ? true : _opts2$clamp;
            _this3.inertiaActive = false;
            _this3.velocity = 0;
            if (_this3.scrollTween) {
              _this3.scrollTween.stop();
              _this3.scrollTween = null;
            }
            var target = doClamp ? _this3.clamp(height, _this3.scroll.minOffset, _this3.scroll.maxOffset) : height;
            if (duration <= 0) {
              _this3._offset = target;
              _this3.updateTopEdgeEntered(_this3._offset); // <-- важно
              _this3.events.emit('offset-changed', _this3._offset);
              _this3.events.emit('scroll-end');
              resolve();
              return;
            }
            var easeFn = typeof easing === 'function' ? easing : _this3._getEase(easing);
            _this3._tweenDriver = {
              value: _this3._offset
            };
            _this3.events.emit('scroll-start');
            _this3._pendingResolve = resolve;
            _this3.scrollTween = tween(_this3._tweenDriver).to(duration, {
              value: target
            }, {
              progress: function progress(start, end, _current, t) {
                var et = easeFn(Math.max(0, Math.min(1, t)));
                return start + (end - start) * et;
              },
              onUpdate: function onUpdate() {
                _this3._offset = doClamp ? _this3.clamp(_this3._tweenDriver.value, _this3.scroll.minOffset, _this3.scroll.maxOffset) : _this3._tweenDriver.value;
                _this3.updateTopEdgeEntered(_this3._offset); // <-- важно
                _this3.events.emit('offset-changed', _this3._offset);
              }
            }).call(function () {
              _this3.scrollTween = null;
              _this3._tweenDriver = null;
              _this3.events.emit('scroll-end');
              var r = _this3._pendingResolve;
              _this3._pendingResolve = null;
              r == null || r();
            }).start();
          });
        }

        /** Два этапа: основной скролл + короткий «нюдж» для точного попадания. */;
        _proto.scrollToHeightWithNudgeAsync = /*#__PURE__*/
        function () {
          var _scrollToHeightWithNudgeAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(height, mainDuration, nudgeDuration, easing, clamp) {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (mainDuration === void 0) {
                    mainDuration = 0.35;
                  }
                  if (nudgeDuration === void 0) {
                    nudgeDuration = 0.1;
                  }
                  if (easing === void 0) {
                    easing = 'quadOut';
                  }
                  if (clamp === void 0) {
                    clamp = true;
                  }
                  _context.next = 6;
                  return this.scrollToHeightAsync(height, {
                    duration: mainDuration,
                    easing: easing,
                    clamp: clamp
                  });
                case 6:
                  if (!(nudgeDuration > 0.01)) {
                    _context.next = 9;
                    break;
                  }
                  _context.next = 9;
                  return this.scrollToHeightAsync(height, {
                    duration: nudgeDuration,
                    easing: easing,
                    clamp: clamp
                  });
                case 9:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function scrollToHeightWithNudgeAsync(_x, _x2, _x3, _x4, _x5) {
            return _scrollToHeightWithNudgeAsync.apply(this, arguments);
          }
          return scrollToHeightWithNudgeAsync;
        }();
        _proto.scrollByHeight = function scrollByHeight(dHeight, opts) {
          if (opts === void 0) {
            opts = {};
          }
          this.scrollToHeight(this._offset + dHeight, opts);
        };
        _proto.scrollByHeightAsync = function scrollByHeightAsync(dHeight, opts) {
          if (opts === void 0) {
            opts = {};
          }
          return this.scrollToHeightAsync(this._offset + dHeight, opts);
        };
        _proto.stopScrollTween = function stopScrollTween() {
          if (this.scrollTween) {
            this.scrollTween.stop();
            this.scrollTween = null;
          }
          if (this._pendingResolve) {
            this._pendingResolve();
            this._pendingResolve = null;
          }
          this._tweenDriver = null;
          this.events.emit('scroll-end');
        }

        // ===== gestures =====
        ;

        _proto.onMouseDown = function onMouseDown(e) {
          if (!this._inputEnabled) return;
          if (e.getButton() !== 0) return;
          if (InteractionState.inGesture && InteractionState.source === 'mouse') return;
          this.mouseHeld = true;
          var y = e.getLocationY();
          this.mouseStartY = y;
          this.mouseLastY = y;
          this.mouseDragging = false;
          this.mouseActive = false;
          this.mouseClaimed = false;
          this.inertiaActive = false;
          this.velocity = 0;
          this.moveSamples.length = 0;
          this.pushSample(y);
        };
        _proto.onMouseMove = function onMouseMove(e) {
          if (!this._inputEnabled) return;
          if (!this.mouseHeld || this.mouseLastY === null || this.mouseStartY === null) return;
          var y = e.getLocationY();
          var dy = y - this.mouseLastY;
          var total = y - this.mouseStartY;
          this.mouseLastY = y;
          this.pushSample(y);
          if (!this.mouseDragging) {
            if (Math.abs(total) >= this.scroll.dragThreshold) this.mouseDragging = true;else return;
          }
          if (dy === 0) return;
          if (!this.mouseActive) {
            this.mouseActive = true;
            if (!InteractionState.inGesture) {
              InteractionState.beginGesture(MOUSE_ID, 'mouse');
              this.mouseClaimed = true;
              this.events.emit('scroll-start');
            } else {
              return;
            }
            InteractionState.markDrag(MOUSE_ID);
          }
          if (this.mouseClaimed) this.applyDeltaUnits(dy * this.scroll.unitsPerPixel);
        };
        _proto.onMouseUp = function onMouseUp(e) {
          if (!this._inputEnabled) return;
          if (e.getButton() !== 0) return;
          if (this.mouseClaimed) InteractionState.tryEndGesture(MOUSE_ID, 'mouse');
          this.mouseHeld = false;
          this.mouseStartY = this.mouseLastY = null;
          this.mouseDragging = false;
          this.mouseActive = false;
          this.mouseClaimed = false;
          if (this.moveSamples.length >= 2) this.startInertiaFromSamples();else this.events.emit('scroll-end');
        };
        _proto.onWheel = function onWheel(e) {
          if (!this._inputEnabled) return;
          var delta = -e.getScrollY();
          if (delta === 0) return;
          var stepUnits = delta / 120 * this.scroll.unitsPerWheelTick;
          var now = this.nowMs();
          if (now - this.wheelDeadzoneLastTs > this.scroll.wheelDeadzoneResetMs) this.wheelAccumUnits = 0;
          this.wheelDeadzoneLastTs = now;
          this.wheelAccumUnits += stepUnits;
          var absAccum = Math.abs(this.wheelAccumUnits);
          var dz = Math.max(0, this.scroll.wheelDeadzoneUnits);
          if (absAccum < dz) return;
          var move = this.wheelAccumUnits - Math.sign(this.wheelAccumUnits) * dz;
          this.wheelAccumUnits = 0;
          var kick = this.clamp(move * this.scroll.wheelKick, -this.scroll.maxInertiaSpeed, this.scroll.maxInertiaSpeed);
          this.velocity = this.clamp(this.velocity + kick, -this.scroll.maxInertiaSpeed, this.scroll.maxInertiaSpeed);
          this.inertiaActive = Math.abs(this.velocity) >= this.scroll.stopVelocity;
          this.events.emit('scroll-start');
        };
        _proto.onTouchStart = function onTouchStart(e) {
          if (!this._inputEnabled) return;
          if (InteractionState.inGesture && InteractionState.source === 'touch') return;
          if (this.touchId !== null) return;
          var id = e.getID();
          this.touchId = id;
          var y = e.getLocationY();
          this.touchStartY = y;
          this.touchLastY = y;
          this.touchDragging = false;
          this.touchActive = false;
          this.touchClaimed = false;
          this.inertiaActive = false;
          this.velocity = 0;
          this.moveSamples.length = 0;
          this.pushSample(y);
        };
        _proto.onTouchMove = function onTouchMove(e) {
          if (!this._inputEnabled) return;
          var id = e.getID();
          if (this.touchId !== id || this.touchLastY === null || this.touchStartY === null) return;
          if (InteractionState.inGesture && InteractionState.source === 'touch' && !this.touchClaimed) return;
          var y = e.getLocationY();
          var dy = y - this.touchLastY;
          var total = y - this.touchStartY;
          this.touchLastY = y;
          this.pushSample(y);
          if (!this.touchDragging) {
            if (Math.abs(total) >= this.scroll.dragThreshold) this.touchDragging = true;else return;
          }
          if (dy === 0) return;
          if (!this.touchActive) {
            if (!InteractionState.inGesture) {
              this.touchActive = true;
              InteractionState.beginGesture(id, 'touch');
              this.touchClaimed = true;
              this.events.emit('scroll-start');
              InteractionState.markDrag(id);
            } else {
              return;
            }
          }
          if (this.touchClaimed) this.applyDeltaUnits(dy * this.scroll.unitsPerPixel);
        };
        _proto.onTouchEnd = function onTouchEnd(e) {
          if (!this._inputEnabled) return;
          var id = e.getID();
          if (this.touchId !== id) return;
          if (this.touchClaimed) InteractionState.tryEndGesture(id, 'touch');
          this.touchId = null;
          this.touchStartY = this.touchLastY = null;
          this.touchDragging = false;
          this.touchActive = false;
          this.touchClaimed = false;
          if (this.moveSamples.length >= 2) this.startInertiaFromSamples();else this.events.emit('scroll-end');
        };
        _proto.onTouchCancel = function onTouchCancel(e) {
          if (!this._inputEnabled) return;
          var id = e.getID();
          if (this.touchId !== id) return;
          if (this.touchClaimed) InteractionState.tryEndGesture(id, 'touch');
          this.touchId = null;
          this.touchStartY = this.touchLastY = null;
          this.touchDragging = false;
          this.touchActive = false;
          this.touchClaimed = false;
          if (this.moveSamples.length >= 2) this.startInertiaFromSamples();else this.events.emit('scroll-end');
        }

        // helpers
        ;

        _proto.nowMs = function nowMs() {
          var _ref, _globalThis$performan;
          // @ts-ignore
          return (_ref = (_globalThis$performan = globalThis.performance) == null || _globalThis$performan.now == null ? void 0 : _globalThis$performan.now()) != null ? _ref : Date.now();
        };
        _proto.pushSample = function pushSample(y) {
          var t = this.nowMs();
          this.moveSamples.push({
            t: t,
            y: y
          });
          if (this.moveSamples.length > this.maxSamples) this.moveSamples.shift();
          var last = this.moveSamples[this.moveSamples.length - 1];
          while (this.moveSamples.length > 1 && last.t - this.moveSamples[0].t > 200) {
            this.moveSamples.shift();
          }
        };
        _proto.startInertiaFromSamples = function startInertiaFromSamples() {
          if (!this.scroll.enableInertia) {
            this.moveSamples.length = 0;
            this.events.emit('scroll-end');
            return;
          }
          if (this.moveSamples.length >= 2) {
            var a = this.moveSamples[0];
            var b = this.moveSamples[this.moveSamples.length - 1];
            var dtSec = Math.max(0.001, (b.t - a.t) / 1000);
            var vPxPerSec = (b.y - a.y) / dtSec;
            var vUnitsPerSec = vPxPerSec * this.scroll.unitsPerPixel;
            this.velocity = this.clamp(vUnitsPerSec, -this.scroll.maxInertiaSpeed, this.scroll.maxInertiaSpeed);
            this.inertiaActive = Math.abs(this.velocity) >= this.scroll.stopVelocity;
            if (!this.inertiaActive) this.events.emit('scroll-end');
          }
          this.moveSamples.length = 0;
        };
        _proto.applyDeltaUnits = function applyDeltaUnits(dUnits) {
          var prev = this._offset;
          var next = this.clamp(prev + dUnits, this.scroll.minOffset, this.scroll.maxOffset);
          if (next !== prev) this.setOffset(next, true);
        };
        _proto.clamp = function clamp(v, a, b) {
          return Math.min(b, Math.max(a, v));
        };
        _proto._getEase = function _getEase(name) {
          switch (name) {
            case 'linear':
              return function (t) {
                return t;
              };
            case 'quadIn':
              return function (t) {
                return t * t;
              };
            case 'quadOut':
              return function (t) {
                return 1 - (1 - t) * (1 - t);
              };
            case 'quadInOut':
              return function (t) {
                return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
              };
            case 'cubicIn':
              return function (t) {
                return t * t * t;
              };
            case 'cubicOut':
              return function (t) {
                return 1 - Math.pow(1 - t, 3);
              };
            case 'cubicInOut':
              return function (t) {
                return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
              };
            case 'quartIn':
              return function (t) {
                return t * t * t * t;
              };
            case 'quartOut':
              return function (t) {
                return 1 - Math.pow(1 - t, 4);
              };
            case 'quartInOut':
              return function (t) {
                return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
              };
            default:
              return function (t) {
                return 1 - (1 - t) * (1 - t);
              };
            // quadOut
          }
        }

        // клавиши
        ;

        _proto.onKeyDown = function onKeyDown(e) {
          var _e$event, _e$event$bind;
          if (!this._inputEnabled) return;

          // чтобы браузер не скроллил страницу при нажатии стрелок/пробела на вебе
          // (в Cocos Creator в e.event лежит исходное DOM-событие)
          (_e$event = e.event) == null || (_e$event = _e$event.preventDefault) == null || (_e$event$bind = _e$event.bind(e.event)) == null || _e$event$bind();
          switch (e.keyCode) {
            case KeyCode.KEY_W:
            case KeyCode.ARROW_UP:
              this.keyHeldW = true;
              break;
            case KeyCode.KEY_S:
            case KeyCode.ARROW_DOWN:
              this.keyHeldS = true;
              break;
          }
        };
        _proto.onKeyUp = function onKeyUp(e) {
          var _e$event2, _e$event2$bind;
          if (!this._inputEnabled) return;
          (_e$event2 = e.event) == null || (_e$event2 = _e$event2.preventDefault) == null || (_e$event2$bind = _e$event2.bind(e.event)) == null || _e$event2$bind();
          switch (e.keyCode) {
            case KeyCode.KEY_W:
            case KeyCode.ARROW_UP:
              this.keyHeldW = false;
              break;
            case KeyCode.KEY_S:
            case KeyCode.ARROW_DOWN:
              this.keyHeldS = false;
              break;
          }
        };
        _createClass(TowerScrollController, [{
          key: "offset",
          get:
          // ед.
          function get() {
            return this._offset;
          }
        }, {
          key: "inputEnabled",
          get: function get() {
            return this._inputEnabled;
          }
        }, {
          key: "isBusy",
          get:
          // удобный флаг
          function get() {
            return !!this.scrollTween || this.inertiaActive || Math.abs(this.velocity) > this.scroll.stopVelocity;
          }
        }]);
        return TowerScrollController;
      }(Component), _descriptor20 = _applyDecoratedDescriptor(_class5.prototype, "scroll", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new TVS_Scroll();
        }
      }), _class5)) || _class4));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TVS_SpawnLayout.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ClickMoveBinding.ts', './ColorLibrary.ts', './TowerScrollController.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, _inheritsLoose, _assertThisInitialized, _createForOfIteratorHelperLoose, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Prefab, Label, sys, instantiate, MeshRenderer, assetManager, Component, ClickMoveBinding, ColorTextureLibrary, TowerScrollController;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _inheritsLoose = module.inheritsLoose;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Label = module.Label;
      sys = module.sys;
      instantiate = module.instantiate;
      MeshRenderer = module.MeshRenderer;
      assetManager = module.assetManager;
      Component = module.Component;
    }, function (module) {
      ClickMoveBinding = module.ClickMoveBinding;
    }, function (module) {
      ColorTextureLibrary = module.ColorTextureLibrary;
    }, function (module) {
      TowerScrollController = module.TowerScrollController;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _class4, _class5, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _class6;
      cclegacy._RF.push({}, "368ffNUv4lFSZtXbbDm9TB3", "TVS_SpawnLayout", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /* ========================= API-модель (урезанная) ========================= */

      /* ========================= Конфиг спавна ========================= */
      var TVS_SpawnLayout = exports('TVS_SpawnLayout', (_dec = ccclass('TVS_SpawnLayout'), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        tooltip: 'Базовый масштаб префаба (Node.scale = 1 → это baseScale префаба)'
      }), _dec4 = property({
        tooltip: 'Базовая геом. высота куска (до масштабов префаба и Node.scale)'
      }), _dec5 = property({
        tooltip: 'Целевой экранный масштаб «базового» куска'
      }), _dec6 = property({
        tooltip: 'Визуальный зазор между уровнями (в ед.: baseHeight * Node.scale)'
      }), _dec7 = property({
        tooltip: 'Якорь Y (локально) — центр окна'
      }), _dec8 = property({
        tooltip: 'Интенсивность градиента масштаба (0..1)'
      }), _dec9 = property({
        tooltip: 'Коэф. по слоям r: r<1 — вниз мельче; r>1 — вниз крупнее.'
      }), _dec10 = property({
        tooltip: 'Включить кламп масштаба каждого куска'
      }), _dec11 = property({
        tooltip: 'Минимальный Node.scale'
      }), _dec12 = property({
        tooltip: 'Максимальный Node.scale'
      }), _dec13 = property({
        tooltip: 'Индекс материала внутри MeshRenderer'
      }), _dec14 = property({
        tooltip: 'Фолбэк: число наборов в библиотеке, если она сама не сообщает'
      }), _dec15 = property({
        type: Label,
        tooltip: 'Куда выводить глобальный счётчик пройденных кусочков'
      }), _dec16 = property({
        tooltip: 'Сколько всего кусочков хотим показать'
      }), _dec17 = property({
        tooltip: 'Seed для выборки/перемешивания кусков'
      }), _dec18 = property({
        tooltip: 'Случайный «набор» (цвета/текстуры) на кусок по gidx'
      }), _dec19 = property({
        tooltip: 'Seed для вычисления индекса набора из gidx'
      }), _dec20 = property({
        tooltip: 'Доп. уровни прокрутки ПОСЛЕ последнего уровня'
      }), _dec21 = property({
        tooltip: 'Если true — последний неполный уровень прижат к верху окна'
      }), _dec22 = property({
        tooltip: 'Делать неполный уровень в НАЧАЛЕ башни (сверху)'
      }), _dec23 = property({
        tooltip: 'Автоматически подставлять значения для ПК/Телефон (по sys.isMobile)'
      }), _dec24 = property({
        tooltip: 'ПК: сколько видимых уровней'
      }), _dec25 = property({
        tooltip: 'ПК: anchorY'
      }), _dec26 = property({
        tooltip: 'Телефон: сколько видимых уровней'
      }), _dec27 = property({
        tooltip: 'Телефон: anchorY'
      }), _dec28 = property({
        tooltip: 'Разрешать ли спавн фейковых тортов (если не хватает API)'
      }), _dec(_class = (_class2 = function TVS_SpawnLayout() {
        _initializerDefineProperty(this, "prefab", _descriptor, this);
        _initializerDefineProperty(this, "objectsPerLevel", _descriptor2, this);
        _initializerDefineProperty(this, "visibleLevels", _descriptor3, this);
        // будет перезаписано профилем, если autoDeviceParams=true
        _initializerDefineProperty(this, "angleStep", _descriptor4, this);
        _initializerDefineProperty(this, "baseScale", _descriptor5, this);
        _initializerDefineProperty(this, "baseHeight", _descriptor6, this);
        _initializerDefineProperty(this, "targetVisualScale", _descriptor7, this);
        _initializerDefineProperty(this, "levelPaddingVisual", _descriptor8, this);
        _initializerDefineProperty(this, "anchorY", _descriptor9, this);
        // будет перезаписано профилем, если autoDeviceParams=true
        _initializerDefineProperty(this, "scaleInWindow", _descriptor10, this);
        _initializerDefineProperty(this, "r", _descriptor11, this);
        _initializerDefineProperty(this, "enableScaleClamp", _descriptor12, this);
        _initializerDefineProperty(this, "minScale", _descriptor13, this);
        _initializerDefineProperty(this, "maxScale", _descriptor14, this);
        _initializerDefineProperty(this, "materialIndex", _descriptor15, this);
        _initializerDefineProperty(this, "colorSetsFallback", _descriptor16, this);
        _initializerDefineProperty(this, "counterLabel", _descriptor17, this);
        /* ===== данные/цвета/прокрутка ===== */
        _initializerDefineProperty(this, "targetPieces", _descriptor18, this);
        _initializerDefineProperty(this, "rngSeed", _descriptor19, this);
        _initializerDefineProperty(this, "randomizeColors", _descriptor20, this);
        _initializerDefineProperty(this, "rngSeedColors", _descriptor21, this);
        _initializerDefineProperty(this, "padAfterLevels", _descriptor22, this);
        _initializerDefineProperty(this, "endPartialAtTop", _descriptor23, this);
        _initializerDefineProperty(this, "partialAtTop", _descriptor24, this);
        /* ====== Профили параметров ПК/Телефон (применяются, если autoDeviceParams=true) ====== */
        _initializerDefineProperty(this, "autoDeviceParams", _descriptor25, this);
        _initializerDefineProperty(this, "visibleLevelsDesktop", _descriptor26, this);
        _initializerDefineProperty(this, "anchorYDesktop", _descriptor27, this);
        _initializerDefineProperty(this, "visibleLevelsMobile", _descriptor28, this);
        _initializerDefineProperty(this, "anchorYMobile", _descriptor29, this);
        _initializerDefineProperty(this, "allowFakePieces", _descriptor30, this);
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "prefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "objectsPerLevel", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 8;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "visibleLevels", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "angleStep", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 45;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "baseScale", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "baseHeight", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "targetVisualScale", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.6;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "levelPaddingVisual", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.0;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "anchorY", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "scaleInWindow", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "r", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.9;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "enableScaleClamp", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "minScale", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.4;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "maxScale", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.8;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "materialIndex", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "colorSetsFallback", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 256;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "counterLabel", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "targetPieces", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1000;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "rngSeed", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 123456789;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "randomizeColors", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "rngSeedColors", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 987654321;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "padAfterLevels", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "endPartialAtTop", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "partialAtTop", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "autoDeviceParams", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "visibleLevelsDesktop", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "anchorYDesktop", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "visibleLevelsMobile", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 6;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "anchorYMobile", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "allowFakePieces", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      })), _class2)) || _class));

      /* ===================== Контроллер башни (ring buffer) ===================== */
      var TowerLayoutController = exports('TowerLayoutController', (_dec29 = ccclass('TowerLayoutController'), _dec30 = property({
        type: TVS_SpawnLayout
      }), _dec31 = property({
        type: TowerScrollController,
        tooltip: 'Ссылка на контроллер скролла'
      }), _dec32 = property({
        type: [String]
      }), _dec33 = property({
        tooltip: 'Сколько реальных картинок (GPU upload) можно ставить за кадр'
      }), _dec34 = property({
        tooltip: 'Сколько уровней дополнительно вокруг окна, где реально ставим текст'
      }), _dec35 = property({
        tooltip: 'Сколько текстов обновлять за кадр'
      }), _dec29(_class4 = (_class5 = (_class6 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TowerLayoutController, _Component);
        function TowerLayoutController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "spawn", _descriptor31, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scrollCtrl", _descriptor32, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Falenames", _descriptor33, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "imagesPerFrame", _descriptor34, _assertThisInitialized(_this));
          _this._imagesBudget = 0;
          /* пул: фикс. размер = vis*per; порядок — сверху вниз */
          _this.pool = [];
          _this.nodeLevelInfo = new Map();
          /* данные/счётчики */
          _this.passedPieces = 0;
          _this.cakesSource = [];
          _this.cakesExpanded = [];
          _this._sentReady = false;
          // чтобы не шлать дубли
          _this.realPiecesCount = 0;
          // ← новое поле: сколько реальных (API) попало в итоговый список
          /* текстовая очередь */
          _this.textUpdateQueue = [];
          _initializerDefineProperty(_this, "textActivationMarginLevels", _descriptor35, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "textsPerFrame", _descriptor36, _assertThisInitialized(_this));
          /* ring buffer состояние */
          _this.prevTopBase = -1;
          /* ===================== scroll events ===================== */
          _this.onOffsetChanged = function (offset) {
            var _this$scrollCtrl;
            var max = _this.getMaxScrollableOffset();
            var clamped = Math.min(offset, max);
            if (clamped !== offset) (_this$scrollCtrl = _this.scrollCtrl) == null || _this$scrollCtrl.scrollToHeight(clamped, {
              duration: 0
            });
            _this.layoutByOffset(clamped);
          };
          return _this;
        }
        var _proto = TowerLayoutController.prototype;
        /* ====== Детект мобильного устройства (ТОЛЬКО sys.isMobile) ====== */
        _proto.isMobileLike = function isMobileLike() {
          return !!sys.isMobile;
        };
        _proto.notifyCakeLoaded = function notifyCakeLoaded() {
          if (this._sentReady) return;
          this._sentReady = true;
          var payload = {
            type: 'IFRAME_READY',
            totalPieces: this.getTotalPieces()
          };

          //console.log('[TowerLayoutController] IFRAME_READY:', payload);
          this.safePostToParent(payload);
        }

        // ============================ Messaging ============================
        ;

        _proto.safePostToParent = function safePostToParent(msg, targetOrigin) {
          if (targetOrigin === void 0) {
            targetOrigin = '*';
          }
          console.log(msg);
          try {
            var _window$parent;
            (_window$parent = window.parent) == null || _window$parent.postMessage(msg, targetOrigin);
          } catch (_unused) {}
        }

        /* ====== Применить профиль и пересобрать при изменении ====== */;
        _proto.applyDeviceParamsAndRelayout = function applyDeviceParamsAndRelayout(force) {
          var _this$spawn;
          if (force === void 0) {
            force = false;
          }
          if (!((_this$spawn = this.spawn) != null && _this$spawn.autoDeviceParams) && !force) return;
          var mobile = this.isMobileLike();
          var nextVisible = Math.max(1, (mobile ? this.spawn.visibleLevelsMobile : this.spawn.visibleLevelsDesktop) | 0);
          var nextAnchorY = mobile ? this.spawn.anchorYMobile : this.spawn.anchorYDesktop;
          var changed = false;

          // Жёстко перезаписываем, чтобы перебить сериализованные значения из сцены
          if (this.spawn.visibleLevels !== nextVisible) {
            this.spawn.visibleLevels = nextVisible;
            changed = true;
          }
          if (this.spawn.anchorY !== nextAnchorY) {
            this.spawn.anchorY = nextAnchorY;
            changed = true;
          }
          if (changed) {
            this.buildPool(); // зависит от visibleLevels
            this.forceRebindVisibleNow(); // полная первичная привязка и раскладка
          }
        }

        /* ===================== lifecycle ===================== */;
        _proto.onLoad = function onLoad() {
          if (!this.lib) console.warn('[TowerLayoutController] ColorTextureLibrary.instance не найден — добавьте компонент на сцену.');
          // ПЕРЕД любой сборкой пула — переписываем профиль (чтобы не залипали старые значения)
          this.applyDeviceParamsAndRelayout(true);
        };
        _proto.boolFromYesNo = function boolFromYesNo(v) {
          if (typeof v === 'string') {
            var s = v.trim().toLowerCase();
            if (s === 'yes') return true;
            if (s === 'no') return false;
          }
          if (typeof v === 'boolean') return v;
          return null;
        };
        _proto.onEnable = /*#__PURE__*/function () {
          var _onEnable = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this$scrollCtrl$offs, _this$scrollCtrl2, _this$scrollCtrl$offs2, _this$scrollCtrl3, _this$scrollCtrl4;
            var cur, max, clamped;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  this.applyDeviceParamsAndRelayout(true);
                  this.buildPool();
                  this.prevTopBase = -1;
                  this.layoutByOffset((_this$scrollCtrl$offs = (_this$scrollCtrl2 = this.scrollCtrl) == null ? void 0 : _this$scrollCtrl2.offset) != null ? _this$scrollCtrl$offs : 0);

                  // 1) грузим данные
                  _context.next = 6;
                  return this.initApiData();
                case 6:
                  // 2) формируем итоговый список кусков (API + фейки при нехватке)
                  this.rebuildExpandedCakes();

                  // 3) полная привязка и первичное заполнение текстов
                  this.forceRebindVisibleNow();
                  this.primeVisibleTextsNow();

                  // 4) кламп по нижней границе и финальная раскладка
                  cur = (_this$scrollCtrl$offs2 = (_this$scrollCtrl3 = this.scrollCtrl) == null ? void 0 : _this$scrollCtrl3.offset) != null ? _this$scrollCtrl$offs2 : 0;
                  max = this.getMaxScrollableOffset();
                  clamped = Math.min(cur, max);
                  if (this.scrollCtrl && clamped !== cur) this.scrollCtrl.scrollToHeight(clamped, {
                    duration: 0
                  });
                  this.layoutByOffset(clamped);

                  // === 5) Ждём загрузки всех картинок нулевого уровня → применяем их → шлём IFRAME_READY
                  _context.next = 16;
                  return this.waitUntilFirstLevelImagesLoaded();
                case 16:
                  this.forceApplyMediaForLevel0();
                  this.notifyCakeLoaded();
                  (_this$scrollCtrl4 = this.scrollCtrl) == null || _this$scrollCtrl4.events.on('offset-changed', this.onOffsetChanged, this);
                case 19:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function onEnable() {
            return _onEnable.apply(this, arguments);
          }
          return onEnable;
        }();
        _proto.onDisable = function onDisable() {
          var _this$scrollCtrl5;
          (_this$scrollCtrl5 = this.scrollCtrl) == null || _this$scrollCtrl5.events.off('offset-changed', this.onOffsetChanged, this);
        };
        /* ===================== ПУБЛИЧНЫЙ API ===================== */
        _proto.getLevelStep = function getLevelStep() {
          return Math.max(1e-6, this.levelStep);
        };
        _proto.getObjectsPerLevel = function getObjectsPerLevel() {
          return this.per;
        };
        _proto.getPiecesCount = function getPiecesCount() {
          return this.getTotalPieces();
        };
        _proto.findMappedAncestor = function findMappedAncestor(node) {
          for (var cur = node; cur; cur = cur.parent) if (this.nodeLevelInfo.has(cur)) return cur;
          return null;
        };
        _proto.getNodeLevel = function getNodeLevel(node) {
          var _this$nodeLevelInfo$g, _this$nodeLevelInfo$g2;
          return (_this$nodeLevelInfo$g = (_this$nodeLevelInfo$g2 = this.nodeLevelInfo.get(node)) == null ? void 0 : _this$nodeLevelInfo$g2.level) != null ? _this$nodeLevelInfo$g : null;
        };
        _proto.getLevelForAny = function getLevelForAny(node) {
          var _this$nodeLevelInfo$g3, _this$nodeLevelInfo$g4;
          var o = this.findMappedAncestor(node);
          return o ? (_this$nodeLevelInfo$g3 = (_this$nodeLevelInfo$g4 = this.nodeLevelInfo.get(o)) == null ? void 0 : _this$nodeLevelInfo$g4.level) != null ? _this$nodeLevelInfo$g3 : null : null;
        };
        _proto.getSlotForAny = function getSlotForAny(node) {
          var _this$nodeLevelInfo$g5, _this$nodeLevelInfo$g6;
          var o = this.findMappedAncestor(node);
          return o ? (_this$nodeLevelInfo$g5 = (_this$nodeLevelInfo$g6 = this.nodeLevelInfo.get(o)) == null ? void 0 : _this$nodeLevelInfo$g6.slot) != null ? _this$nodeLevelInfo$g5 : null : null;
        };
        _proto.findNodeByLevelSlot = function findNodeByLevelSlot(level, slot) {
          for (var _iterator = _createForOfIteratorHelperLoose(this.nodeLevelInfo), _step; !(_step = _iterator()).done;) {
            var _step$value = _step.value,
              n = _step$value[0],
              info = _step$value[1];
            if (n.activeInHierarchy && info.level === level && info.slot === slot) return n;
          }
          return null;
        };
        _proto.scrollToLevel = function scrollToLevel(level, opts) {
          var _this$scrollCtrl6;
          (_this$scrollCtrl6 = this.scrollCtrl) == null || _this$scrollCtrl6.scrollToHeight(level * this.levelStep, opts != null ? opts : {});
        };
        _proto.scrollToNodeLevel = function scrollToNodeLevel(node, opts) {
          var L = this.getNodeLevel(node);
          if (L == null) return false;
          this.scrollToLevel(L, opts);
          return true;
        };
        _proto.scrollToNodeOrAncestorLevel = function scrollToNodeOrAncestorLevel(node, opts) {
          var o = this.findMappedAncestor(node);
          return o ? this.scrollToNodeLevel(o, opts) : false;
        };
        _proto.dataIndexToLevelSlot = function dataIndexToLevelSlot(dataIndex) {
          var total = this.getTotalPieces();
          if (dataIndex < 0 || dataIndex >= total) return null;
          var per = this.per;
          var headPad = this.getHeadPad(per, total);
          var gidx = dataIndex + headPad;
          return {
            level: Math.floor(gidx / per),
            slot: gidx % per
          };
        };
        _proto.levelSlotToDataIndex = function levelSlotToDataIndex(level, slot) {
          var total = this.getTotalPieces();
          var per = this.per;
          var headPad = this.getHeadPad(per, total);
          var gidx = level * per + slot;
          var di = gidx - headPad;
          return di >= 0 && di < total ? di : -1;
        };
        _proto.getPieceByDataIndex = function getPieceByDataIndex(dataIndex) {
          var pos = this.dataIndexToLevelSlot(dataIndex);
          return pos ? this.getPieceFor(pos.level, pos.slot) : null;
        };
        _proto.findLevelSlotByUniqId = function findLevelSlotByUniqId(uniqId) {
          if (!uniqId) return null;
          var total = this.getTotalPieces();
          for (var di = 0; di < total; di++) {
            var p = this.cakesExpanded[di];
            if (p != null && p.uniq_id && p.uniq_id.toLowerCase() === uniqId.toLowerCase()) {
              var pos = this.dataIndexToLevelSlot(di);
              if (!pos) continue;
              return {
                level: pos.level,
                slot: pos.slot,
                dataIndex: di,
                piece: p
              };
            }
          }
          return null;
        };
        _proto.scrollToUniqId = function scrollToUniqId(uniqId, opts) {
          var found = this.findLevelSlotByUniqId(uniqId);
          if (!found) return false;
          this.scrollToLevel(found.level, opts);
          return true;
        };
        _proto.getPieceInfoByLevelSlot = function getPieceInfoByLevelSlot(level, slot) {
          var di = this.levelSlotToDataIndex(level, slot);
          if (di < 0) return null;
          var piece = this.getPieceFor(level, slot);
          return piece ? {
            level: level,
            slot: slot,
            dataIndex: di,
            piece: piece
          } : null;
        };
        _proto.scrollToRandomPiece = function scrollToRandomPiece(opts) {
          var _opts$seed;
          var total = this.getTotalPieces();
          if (!total) return null;
          var rng = this.mulberry32(((_opts$seed = opts == null ? void 0 : opts.seed) != null ? _opts$seed : this.spawn.rngSeed) >>> 0);
          var dataIndex = Math.floor(rng() * total);
          var pos = this.dataIndexToLevelSlot(dataIndex);
          if (!pos) return null;
          this.scrollToLevel(pos.level, opts);
          var piece = this.getPieceFor(pos.level, pos.slot);
          return piece ? {
            level: pos.level,
            slot: pos.slot,
            dataIndex: dataIndex,
            piece: piece
          } : null;
        }

        /* ===================== API-данные ===================== */;
        _proto.initApiData = /*#__PURE__*/
        function () {
          var _initApiData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _this2 = this;
            var response, raw, items;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return fetch('https://api.demo-stage.ru/cake/list', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({})
                  });
                case 3:
                  response = _context2.sent;
                  if (response.ok) {
                    _context2.next = 13;
                    break;
                  }
                  _context2.t0 = console;
                  _context2.t1 = response.status;
                  _context2.next = 9;
                  return this.safeReadText(response);
                case 9:
                  _context2.t2 = _context2.sent;
                  _context2.t0.error.call(_context2.t0, '[API] Ошибка:', _context2.t1, _context2.t2);
                  this.cakesSource = [];
                  return _context2.abrupt("return");
                case 13:
                  _context2.next = 15;
                  return response.json();
                case 15:
                  raw = _context2.sent;
                  items = Array.isArray(raw == null ? void 0 : raw.cakes) ? raw.cakes : []; // ВАЖНО: нормализуем только 5 нужных полей
                  this.cakesSource = items.map(function (it) {
                    return _this2.normalizeCakePiece(it);
                  });
                  console.log(this.cakesSource);
                  _context2.next = 25;
                  break;
                case 21:
                  _context2.prev = 21;
                  _context2.t3 = _context2["catch"](0);
                  console.error('[API] Ошибка соединения:', _context2.t3);
                  this.cakesSource = [];
                case 25:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this, [[0, 21]]);
          }));
          function initApiData() {
            return _initApiData.apply(this, arguments);
          }
          return initApiData;
        }() /** Собрать массив на targetPieces: API + фейки (__fake=true) + стабильная выборка */;
        _proto.rebuildExpandedCakes = function rebuildExpandedCakes() {
          var src = this.cakesSource.filter(Boolean); // порядок как в API
          var wantRaw = Math.max(0, Math.floor(this.spawn.targetPieces));
          var onlyApi = !this.spawn.allowFakePieces; // галка выключена → только API

          // Когда только API — ЖЁСТКАЯ отсечка по размеру API
          var want = onlyApi ? Math.min(wantRaw, src.length) : wantRaw;
          var out = [];

          // 1) забираем из API строго по порядку
          var take = Math.min(want, src.length);
          out.push.apply(out, src.slice(0, take));

          // 2) добивка фейками — ТОЛЬКО если галка включена
          if (!onlyApi && out.length < want) {
            for (var i = out.length; i < want; i++) out.push(this.makeFakePiece(i));
          }

          // важный момент: ПОЛНАЯ замена массива, без .push к старому
          this.cakesExpanded = out;

          // количество реальных (тех, что пришли из API и попали в итоговый список)
          this.realPiecesCount = out.filter(function (p) {
            return !p.__fake;
          }).length;
          this.dlog('[EXPAND]', "targetPieces=" + wantRaw + ", allowFake=" + !onlyApi + ", API=" + src.length + ", " + ("\u0432\u0437\u044F\u0442\u043E\u0418\u0437API=" + take + ", \u0444\u0435\u0439\u043A\u043E\u0432\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043E=" + (out.length - take) + ", \u0438\u0442\u043E\u0433\u0412\u0441\u0435\u0433\u043E=" + out.length + ", ") + ("\u0440\u0435\u0430\u043B\u044C\u043D\u044B\u0445\u0412\u0418\u0442\u043E\u0433\u0435=" + this.realPiecesCount));
        }

        /* === ИЗМЕНЕНО: фейки теперь явно задают show_name === */;
        _proto.makeFakePiece = function makeFakePiece(i) {
          var _this$makeFakeText = this.makeFakeText(i),
            name = _this$makeFakeText.name;
          var fake = {
            uniq_id: null,
            hex_color: null,
            name: name,
            filling_id: null,
            file: null,
            greeting_text: null,
            show_name: true // фейки всегда с именем
          };

          fake.__fake = true;
          return fake;
        }

        /* ===================== доступ к данным ===================== */;
        _proto.getHeadPad = function getHeadPad(per, total) {
          if (!this.spawn.partialAtTop || per <= 0 || total <= 0) return 0;
          var rem = total % per;
          return rem === 0 ? 0 : per - rem;
        };
        _proto.getTotalPieces = function getTotalPieces() {
          return this.cakesExpanded.length | 0;
        };
        _proto.getTotalLevels = function getTotalLevels() {
          var total = this.getTotalPieces();
          var headPad = this.getHeadPad(this.per, total);
          return Math.ceil((headPad + total) / this.per);
        };
        _proto.getPieceFor = function getPieceFor(level, slot) {
          var total = this.getTotalPieces();
          if (!total) return null;
          var headPad = this.getHeadPad(this.per, total);
          var dataIndex = level * this.per + slot - headPad;
          return dataIndex >= 0 && dataIndex < total ? this.cakesExpanded[dataIndex] : null;
        };
        _proto.globalIndexOf = function globalIndexOf(level, slot) {
          return level * this.per + slot;
        }

        /* ===================== RING BUFFER РАСКЛАДКА ===================== */;
        _proto.layoutByOffset = function layoutByOffset(offset) {
          var _this3 = this;
          if (!this.spawn.prefab || !this.pool.length) return;
          var step = Math.max(1e-6, this.levelStep);
          var depthRaw = offset / step;
          var totalLevels = this.getTotalLevels();
          var clampWhenData = totalLevels > 0;
          var pad = Math.max(0, this.spawn.padAfterLevels);
          var maxTopBase = Math.max(0, totalLevels - this.vis + pad);
          var depth = clampWhenData ? Math.min(depthRaw, maxTopBase) : depthRaw;
          var topBase = Math.max(0, Math.floor(depth));
          var frac = depth - topBase;

          // глобальный счётчик
          var newPassed = topBase * this.per;
          if (newPassed !== this.passedPieces) {
            this.passedPieces = newPassed;
            if (this.spawn.counterLabel) this.spawn.counterLabel.string = String(this.passedPieces);
          }

          // 1) если topBase изменился — перевязываем ровно один слой за шаг delta
          if (this.prevTopBase < 0) {
            // первичная привязка
            for (var L = 0; L < this.vis; L++) {
              var abs = topBase + L;
              for (var j = 0; j < this.per; j++) {
                var n = this.pool[L * this.per + j];
                this.bindNodeFor(abs, j, n);
              }
            }
            this.prevTopBase = topBase;
          } else if (topBase !== this.prevTopBase) {
            var delta = topBase - this.prevTopBase;
            if (delta > 0) {
              // вниз: верхнюю пачку вниз
              for (var stepCount = 0; stepCount < delta; stepCount++) {
                var _this$pool;
                var taken = this.pool.splice(0, this.per);
                (_this$pool = this.pool).push.apply(_this$pool, taken);
                var newBottomAbs = this.prevTopBase + this.vis + stepCount;
                for (var _j = 0; _j < this.per; _j++) {
                  var _n = this.pool[(this.vis - 1) * this.per + _j];
                  this.bindNodeFor(newBottomAbs, _j, _n);
                }
              }
            } else {
              // вверх: нижнюю пачку вверх
              for (var _stepCount = 0; _stepCount < -delta; _stepCount++) {
                var _this$pool2;
                var _taken = this.pool.splice(this.pool.length - this.per, this.per);
                (_this$pool2 = this.pool).unshift.apply(_this$pool2, _taken);
                var newTopAbs = this.prevTopBase - 1 - _stepCount;
                for (var _j2 = 0; _j2 < this.per; _j2++) {
                  var _n2 = this.pool[_j2];
                  this.bindNodeFor(newTopAbs, _j2, _n2);
                }
              }
            }
            this.prevTopBase = topBase;
          }

          // 2) позиции/масштабы для всех (контент НЕ меняем)
          var sGrad = this.spawn.scaleInWindow;
          var rSafe = Math.max(1e-6, this.spawn.r);
          var clampScale = function clampScale(x) {
            if (!_this3.spawn.enableScaleClamp) return x;
            var lo = Math.min(_this3.spawn.minScale, _this3.spawn.maxScale);
            var hi = Math.max(_this3.spawn.minScale, _this3.spawn.maxScale);
            return Math.min(hi, Math.max(lo, x));
          };
          var desiredScaleAtRel = function desiredScaleAtRel(rel) {
            return clampScale(_this3.basePieceScale * Math.pow(rSafe, -rel * sGrad));
          };
          var relTop = topBase - depth;
          var topScale = desiredScaleAtRel(relTop);
          var topVisualHeight = this.spawn.baseHeight * this.spawn.baseScale * topScale;
          var accY = -frac * (topVisualHeight + this.spawn.levelPaddingVisual);
          var angleStep = this.spawn.angleStep;
          for (var _L = 0; _L < this.vis; _L++) {
            var _abs = topBase + _L;
            var rel = _abs - depth;
            var pieceS = desiredScaleAtRel(rel);
            var yTop = this.spawn.anchorY - accY;
            for (var _j3 = 0; _j3 < this.per; _j3++) {
              var _n3 = this.pool[_L * this.per + _j3];
              var cache = this._getNodeCache(_n3);
              if (cache.slot !== _j3 || cache.angleStep !== angleStep) {
                _n3.setRotationFromEuler(0, _j3 * angleStep, 0);
                cache.slot = _j3;
                cache.angleStep = angleStep;
              }
              if (cache.lastY === undefined || Math.abs(cache.lastY - yTop) > TowerLayoutController.EPS) {
                _n3.setPosition(0, yTop, 0);
                cache.lastY = yTop;
              }
              if (cache.lastScale === undefined || Math.abs(cache.lastScale - pieceS) > TowerLayoutController.EPS) {
                _n3.setScale(pieceS, pieceS, pieceS);
                cache.lastScale = pieceS;
              }
              if (!this.nodeLevelInfo.has(_n3) || this.nodeLevelInfo.get(_n3).level !== _abs || this.nodeLevelInfo.get(_n3).slot !== _j3) {
                this.nodeLevelInfo.set(_n3, {
                  level: _abs,
                  slot: _j3
                });
                cache.level = _abs;
              }
            }
            var visualHeight = this.spawn.baseHeight * this.spawn.baseScale * pieceS;
            accY += visualHeight + this.spawn.levelPaddingVisual;
          }

          // партия текстов в «зоне активации»
          this.flushTextQueue(topBase);
        }

        /** Привязать контент к узлу для указанного уровня/слота (только при входе уровня в окно) */
        /** Привязать контент к узлу для указанного уровня/слота. 
         *  Медиа (URL) — только если absLevel===0, иначе — заглушка.
         */;
        _proto.bindNodeFor = function bindNodeFor(absLevel, slot, n, immediateText) {
          if (immediateText === void 0) {
            immediateText = false;
          }
          var piece = this.getPieceFor(absLevel, slot);
          if (!piece) {
            n.active = false;
            this.nodeLevelInfo["delete"](n);
            n.__boundIndex = undefined;
            return;
          }
          if (!n.active) n.active = true;
          var gidx = this.globalIndexOf(absLevel, slot);
          var cache = this._getNodeCache(n);

          // тема/паттерны применяем сразу
          this.applyLibrarySetForIndex(n, gidx, piece);
          if (immediateText) {
            // даже при немедленном обновлении: медиа только для уровня 0
            this.applyPieceTextIfChanged(n, piece, gidx, this.shouldLoadApiImage(absLevel));
          } else {
            cache.textEnqueued = true;
            this.textUpdateQueue.push({
              node: n,
              piece: piece,
              absLevel: absLevel
            });
          }
          n.__boundIndex = gidx;
          this.nodeLevelInfo.set(n, {
            level: absLevel,
            slot: slot
          });
          cache.level = absLevel;
          cache.slot = slot;
        }

        /** Мгновенно проставляет текст всем видимым уровням.
          *  Реальную картинку отдаёт ТОЛЬКО для уровня 0, остальным — заглушку.
          */;
        _proto.primeVisibleTextsNow = function primeVisibleTextsNow() {
          var _this$scrollCtrl$offs3, _this$scrollCtrl7;
          if (!this.pool.length) return;
          var off = (_this$scrollCtrl$offs3 = (_this$scrollCtrl7 = this.scrollCtrl) == null ? void 0 : _this$scrollCtrl7.offset) != null ? _this$scrollCtrl$offs3 : 0;
          var step = Math.max(1e-6, this.levelStep);
          var depth = off / step;
          var topBase = Math.max(0, Math.floor(depth));
          for (var L = 0; L < this.vis; L++) {
            var abs = topBase + L;
            for (var j = 0; j < this.per; j++) {
              var n = this.pool[L * this.per + j];
              var piece = this.getPieceFor(abs, j);
              if (!n || !piece) continue;
              var gidx = this.globalIndexOf(abs, j);

              // Цвет/паттерны из библиотеки — сразу
              this.applyLibrarySetForIndex(n, gidx, piece);

              // Реальные изображения — только для уровня 0 И только если есть бюджет
              var wantsMedia = this.shouldLoadApiImage(abs);
              var withMedia = wantsMedia && this._imagesBudget > 0;
              this.applyPieceTextIfChanged(n, piece, gidx, withMedia);
              if (withMedia) this._imagesBudget--;else {
                // если картинка нужна, но бюджета нет — пусть останется в очереди
                var _cache = this._getNodeCache(n);
                _cache.textEnqueued = true;
                this.textUpdateQueue.push({
                  node: n,
                  piece: piece,
                  absLevel: abs
                });
              }
              this.nodeLevelInfo.set(n, {
                level: abs,
                slot: j
              });
              n.__boundIndex = gidx;
              var cache = this._getNodeCache(n);
              cache.level = abs;
              cache.slot = j;
            }
          }
          this.prevTopBase = topBase;
          this.layoutByOffset(off);
        }

        /* ===================== цвет/текстуры ===================== */;
        _proto._getNodeCache = function _getNodeCache(n) {
          var _cache2;
          return (_cache2 = n.__cache) != null ? _cache2 : n.__cache = {
            bindings: null,
            mrs: null,
            lastBaseSet: -1,
            lastSetCount: -1,
            lastGidx: -1,
            lastScale: undefined,
            lastY: undefined,
            slot: undefined,
            angleStep: undefined,
            level: undefined,
            lastName: undefined,
            textEnqueued: false
          };
        };
        _proto.applyLibrarySetForIndex = function applyLibrarySetForIndex(root, gidx, piece) {
          var _piece$hex_color;
          var lib = this.lib;
          if (!lib) return;
          var cache = this._getNodeCache(root);
          if (!cache.bindings) {
            cache.bindings = root.getComponentsInChildren(ClickMoveBinding);
          }
          var bindings = cache.bindings;

          // одна тема на весь префаб (как и раньше)
          var theme = lib.resolveTheme((_piece$hex_color = piece == null ? void 0 : piece.hex_color) != null ? _piece$hex_color : null, this.spawn.rngSeedColors >>> 0, gidx);
          if (!theme) return;

          // важно: здесь и паттерн/боковина, и БЕЗОПАСНАЯ установка цвета текста
          for (var _iterator2 = _createForOfIteratorHelperLoose(bindings), _step2; !(_step2 = _iterator2()).done;) {
            var _piece$hex_color2, _piece$filling_id;
            var b = _step2.value;
            lib.applyThemeToBinding(b, (_piece$hex_color2 = piece == null ? void 0 : piece.hex_color) != null ? _piece$hex_color2 : null,
            // имя темы из API
            gidx, this.spawn.rngSeedColors >>> 0,
            // seed для паттерна
            (_piece$filling_id = piece == null ? void 0 : piece.filling_id) != null ? _piece$filling_id : null,
            // индекс паттерна из API (если есть)
            this.spawn.rngSeedColors >>> 0 // seed для выбора темы (fallback)
            );
          }
        }

        /** Только самая верхушка башни (абсолютный уровень 0) может грузить изображение из API */;
        _proto.shouldLoadApiImage = function shouldLoadApiImage(absLevel) {
          return absLevel === 0;
        };
        _proto.update = function update() {
          this._imagesBudget = Math.max(0, this.imagesPerFrame | 0);
        }

        /** Применяет тексты из очереди. Реальные картинки — только для абсолютного уровня 0. */;
        _proto.flushTextQueue = function flushTextQueue(topBase) {
          var margin = Math.max(0, this.textActivationMarginLevels);
          var minL = Math.max(0, topBase - margin);
          var maxL = topBase + this.vis - 1 + margin;
          var i = 0,
            updated = 0;
          while (i < this.textUpdateQueue.length && updated < this.textsPerFrame) {
            var _this$nodeLevelInfo$g7, _this$nodeLevelInfo$g8;
            var item = this.textUpdateQueue[i];
            if (!item.node || !item.node.isValid || !item.node.activeInHierarchy) {
              this.textUpdateQueue.splice(i, 1);
              continue;
            }
            if (item.absLevel < minL || item.absLevel > maxL) {
              i++;
              continue;
            }
            var slot = (_this$nodeLevelInfo$g7 = (_this$nodeLevelInfo$g8 = this.nodeLevelInfo.get(item.node)) == null ? void 0 : _this$nodeLevelInfo$g8.slot) != null ? _this$nodeLevelInfo$g7 : 0;
            var gidx = this.globalIndexOf(item.absLevel, slot);
            var wantsMedia = this.shouldLoadApiImage(item.absLevel);
            var canUseMedia = wantsMedia && this._imagesBudget > 0;

            // Если хотим медиа, но бюджет исчерпан — подождём следующий кадр
            if (wantsMedia && !canUseMedia) {
              i++;
              continue;
            }
            this.applyPieceTextIfChanged(item.node, item.piece, gidx, canUseMedia);
            if (canUseMedia) this._imagesBudget--;
            this.textUpdateQueue.splice(i, 1);
            updated++;
          }
          var HARD_LIMIT = this.vis * this.per * 4;
          if (this.textUpdateQueue.length > HARD_LIMIT) this.textUpdateQueue.length = HARD_LIMIT;
        }

        /** Обновляет текст и боковую картинку.
         *  Если withMedia=false → всегда подставляем заглушку (theme.sideTexture) вместо URL.
         *  Если withMedia=true  → передаём реальный URL из piece.file (если он есть).
         */;
        _proto.applyPieceTextIfChanged = function applyPieceTextIfChanged(root, piece, gidx, withMedia) {
          var _piece$name;
          if (withMedia === void 0) {
            withMedia = false;
          }
          var cache = this._getNodeCache(root);
          var lib = this.lib; // ColorTextureLibrary.instance

          // НЕ присваиваем __piece, чтобы не запускать сторонние загрузчики
          root.__piece = null;

          // ---- Текст: обязательно отправляем даже пустую строку ----
          var nextName = (_piece$name = piece == null ? void 0 : piece.name) != null ? _piece$name : '';
          if (piece && piece.__fake === true) {
            // фейки всегда с именем
            nextName = this.makeFakeText(gidx).name;
          } else {
            var _piece$show_name;
            // если API прислал show_name = "no" → подставляем ПУСТУЮ СТРОКУ
            var show = (_piece$show_name = piece == null ? void 0 : piece.show_name) != null ? _piece$show_name : true;
            if (!show) nextName = '';
          }
          if (cache.lastName !== nextName) {
            if (!cache.bindings) cache.bindings = root.getComponentsInChildren(ClickMoveBinding);
            for (var _i = 0, _arr = cache.bindings; _i < _arr.length; _i++) {
              var b = _arr[_i];
              // ВАЖНО: передаём пустую строку, чтобы затереть старый текст
              lib == null || lib.applyApiTextToBinding(b, {
                title: '',
                name: nextName
              });
            }
            cache.lastName = nextName;
          }

          // ---- Боковая картинка ----
          if (!cache.bindings) cache.bindings = root.getComponentsInChildren(ClickMoveBinding);
          var urlForThisNode = withMedia && piece != null && piece.file ? piece.file : null;
          for (var _i2 = 0, _arr2 = cache.bindings; _i2 < _arr2.length; _i2++) {
            var _piece$hex_color3;
            var _b = _arr2[_i2];
            lib == null || lib.applySideUrlOrThemeToBinding(_b, urlForThisNode,
            // null → поставит theme.sideTexture (placeholder)
            (_piece$hex_color3 = piece == null ? void 0 : piece.hex_color) != null ? _piece$hex_color3 : null,
            // имя темы для выбора заглушки
            gidx, this.spawn.rngSeedColors >>> 0);
          }
          cache.textEnqueued = false;
        };
        _proto.makeFakeText = function makeFakeText(gidx) {
          var r = this.mulberry32((this.spawn.rngSeedColors ^ gidx * 2654435761) >>> 0);
          var name = this.Falenames[Math.floor(r() * this.Falenames.length)];
          return {
            name: name
          };
        }

        /* ===================== нормализация/утилиты ===================== */;
        _proto.safeReadText = /*#__PURE__*/
        function () {
          var _safeReadText = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(resp) {
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.prev = 0;
                  _context3.next = 3;
                  return resp.text();
                case 3:
                  return _context3.abrupt("return", _context3.sent);
                case 6:
                  _context3.prev = 6;
                  _context3.t0 = _context3["catch"](0);
                  return _context3.abrupt("return", '');
                case 9:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, null, [[0, 6]]);
          }));
          function safeReadText(_x) {
            return _safeReadText.apply(this, arguments);
          }
          return safeReadText;
        }();
        _proto.strOrNull = function strOrNull(v) {
          if (typeof v !== 'string') return null;
          var s = v.trim();
          return s ? s : null;
        };
        _proto.numOrNull = function numOrNull(v) {
          if (typeof v === 'number' && Number.isFinite(v)) return v;
          if (typeof v === 'string') {
            var s = v.trim();
            if (!s) return null;
            var n = Number(s);
            return Number.isFinite(n) ? n : null;
          }
          return null;
        };
        _proto.shouldActivateMedia = function shouldActivateMedia(absLevel) {
          // медиа только у самой-самой верхушки башни
          return absLevel === 0;
        };
        _proto.dlog = function dlog() {
          var _console;
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          (_console = console).log.apply(_console, ['[TowerLayoutController]'].concat(args));
        };
        _proto.isUuidLoose = function isUuidLoose(s) {
          return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(s.trim());
        }

        /* === ИЗМЕНЕНО: нормализация нового поля show_name + остальное без изменений === */
        // 2) В normalizeCakePiece ЗАМЕНИТЕ блок с uniq_id на этот (убрали isUuidLoose):
        ;

        _proto.normalizeCakePiece = function normalizeCakePiece(raw) {
          var _ref, _ref2, _raw$uniq_id, _raw$hex_color, _raw$filling_id, _ref3, _ref4, _raw$file, _ref5, _raw$greeting_text, _this$boolFromYesNo, _raw$show_name;
          // uniq_id: берём как есть, БЕЗ проверки UUID, просто приводим к строке
          var uniq_id = this.anyToStringOrNull((_ref = (_ref2 = (_raw$uniq_id = raw == null ? void 0 : raw.uniq_id) != null ? _raw$uniq_id : raw == null ? void 0 : raw.id) != null ? _ref2 : raw == null ? void 0 : raw.user_id) != null ? _ref : raw == null ? void 0 : raw.uniqId);

          // hex_color (#RRGGBB или #RGB → приводим к #RRGGBB, ВЕРХНИЙ РЕГИСТР)
          var hex_color = this.strOrNull((_raw$hex_color = raw == null ? void 0 : raw.hex_color) != null ? _raw$hex_color : raw == null ? void 0 : raw.color);
          if (hex_color) {
            var s = hex_color.trim();
            if (s.startsWith('#')) s = s.slice(1);
            s = s.toLowerCase();
            if (s.length === 3) {
              var r = s[0],
                g = s[1],
                b = s[2];
              hex_color = ('#' + r + r + g + g + b + b).toUpperCase();
            } else if (s.length === 6 && /^[0-9a-f]{6}$/.test(s)) {
              hex_color = ('#' + s).toUpperCase();
            } else {
              hex_color = null;
            }
          }
          var name = this.strOrNull(raw == null ? void 0 : raw.name);
          var filling_id = this.numOrNull((_raw$filling_id = raw == null ? void 0 : raw.filling_id) != null ? _raw$filling_id : raw == null ? void 0 : raw.fillingId);
          var file = this.strOrNull((_ref3 = (_ref4 = (_raw$file = raw == null ? void 0 : raw.file) != null ? _raw$file : raw == null ? void 0 : raw.file_url) != null ? _ref4 : raw == null ? void 0 : raw.fileUrl) != null ? _ref3 : raw == null ? void 0 : raw.file_base64);
          var greeting_text = this.strOrNull((_ref5 = (_raw$greeting_text = raw == null ? void 0 : raw.greeting_text) != null ? _raw$greeting_text : raw == null ? void 0 : raw.greetingText) != null ? _ref5 : raw == null ? void 0 : raw.greeting);

          // show_name: "yes"/"no" → boolean (default: true) — как было
          var show_name = (_this$boolFromYesNo = this.boolFromYesNo((_raw$show_name = raw == null ? void 0 : raw.show_name) != null ? _raw$show_name : raw == null ? void 0 : raw.showName)) != null ? _this$boolFromYesNo : true;
          return {
            uniq_id: uniq_id,
            hex_color: hex_color,
            name: name,
            filling_id: filling_id,
            file: file,
            greeting_text: greeting_text,
            show_name: show_name
          };
        }

        // Максимально прокручиваемая высота (в тех же ед., что offset)
        ;

        _proto.getMaxScrollableOffset = function getMaxScrollableOffset() {
          var totalLevels = this.getTotalLevels();
          if (totalLevels === 0) return 0;
          var pad = Math.max(0, this.spawn.padAfterLevels);
          var maxTopBase = Math.max(0, totalLevels - this.vis + pad);
          return (maxTopBase + 1) * this.levelStep;
        }

        // Построение пула (ровно vis*per нод, порядок — сверху вниз)
        ;

        _proto.buildPool = function buildPool() {
          var need = this.vis * this.per;
          if (!this.spawn.prefab) {
            console.warn('TowerLayoutController: prefab не назначен');
            return;
          }
          this.pool.length = 0;
          for (var i = 0; i < need; i++) {
            var n = instantiate(this.spawn.prefab);
            n.setParent(this.node);
            n.active = true;

            // ── Преварм: создаём инстансы материалов сейчас,
            // чтобы их создание не случилось в "горячем" кадре прокрутки
            try {
              var mrs = n.getComponentsInChildren(MeshRenderer);
              for (var _iterator3 = _createForOfIteratorHelperLoose(mrs), _step3; !(_step3 = _iterator3()).done;) {
                var mr = _step3.value;
                // получить инстансы (pattern/side), индексы берём из библиотеки
                var lib = this.lib;
                if (lib) {
                  mr.getMaterialInstance(lib.patternMatIndex);
                  mr.getMaterialInstance(lib.sideMatIndex);
                } else {
                  // хотя бы первый материал «разбудим»
                  mr.getMaterialInstance(0);
                }
              }
            } catch (_unused3) {/* безопасно пропускаем */}
            this.pool.push(n);
          }
          this.nodeLevelInfo.clear();
        };
        _proto.forceRebindVisibleNow = function forceRebindVisibleNow() {
          var _this$scrollCtrl$offs4, _this$scrollCtrl8;
          var off = (_this$scrollCtrl$offs4 = (_this$scrollCtrl8 = this.scrollCtrl) == null ? void 0 : _this$scrollCtrl8.offset) != null ? _this$scrollCtrl$offs4 : 0;
          this.prevTopBase = -1; // заставляем layout сделать полную первичную привязку
          this.layoutByOffset(off); // и сразу же применяем
        }

        /* ===================== PRELOAD изображений уровня 0 + форс-применение ===================== */;
        _proto.preloadTexture = function preloadTexture(url) {
          return new Promise(function (resolve, reject) {
            assetManager.loadRemote(url, function (err) {
              if (err) {
                reject(err);
                return;
              }
              resolve();
            });
          });
        }

        /** Гарантирует, что высота `height` достижима: при необходимости
        *  увеличивает padAfterLevels так, чтобы maxTopBase >= ceil(height/step). */;
        _proto.ensureBottomPaddingForHeight = function ensureBottomPaddingForHeight(height, extraLevels) {
          if (extraLevels === void 0) {
            extraLevels = 0;
          }
          var step = this.getLevelStep();
          if (step <= 0) return;

          // глубина, куда хотим прокрутиться (в "уровнях", может быть дробной)
          var depthRaw = height / step;
          var totalLevels = this.getTotalLevels();
          if (totalLevels <= 0) return;

          // какой maxTopBase нужен, чтобы добраться до этой глубины
          var needMaxTopBase = Math.max(0, Math.ceil(depthRaw));

          // базовый maxTopBase без паддинга = totalLevels - vis
          var baseMaxTop = Math.max(0, totalLevels - this.vis);

          // сколько паддинга нужно, с учётом дополнительного запаса
          var requiredPad = Math.max(0, needMaxTopBase + Math.max(0, extraLevels) - baseMaxTop);
          if (requiredPad > this.spawn.padAfterLevels) {
            var _this$scrollCtrl$offs5, _this$scrollCtrl9, _this$scrollCtrl$offs6, _this$scrollCtrl10;
            this.spawn.padAfterLevels = requiredPad;

            // обновим раскладку и верхний кламп (он теперь дальше)
            var cur = (_this$scrollCtrl$offs5 = (_this$scrollCtrl9 = this.scrollCtrl) == null ? void 0 : _this$scrollCtrl9.offset) != null ? _this$scrollCtrl$offs5 : 0;
            var max = this.getMaxScrollableOffset();
            // если внезапно текущая позиция оказалась "выше" нового max — подсинхронимся
            if (this.scrollCtrl && cur > max) this.scrollCtrl.scrollToHeight(max, {
              duration: 0
            });
            // перелэйаутим на текущем оффсете
            this.layoutByOffset((_this$scrollCtrl$offs6 = (_this$scrollCtrl10 = this.scrollCtrl) == null ? void 0 : _this$scrollCtrl10.offset) != null ? _this$scrollCtrl$offs6 : 0);
          }
        }

        /** Ждём загрузки всех картинок нулевого уровня (если они есть). */;
        _proto.waitUntilFirstLevelImagesLoaded = /*#__PURE__*/
        function () {
          var _waitUntilFirstLevelImagesLoaded = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(timeoutMs) {
            var _this4 = this;
            var urls, j, _piece$file, piece, u, uniq, all, timeout;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  if (timeoutMs === void 0) {
                    timeoutMs = 5000;
                  }
                  urls = [];
                  for (j = 0; j < this.per; j++) {
                    piece = this.getPieceFor(0, j);
                    u = piece == null || (_piece$file = piece.file) == null ? void 0 : _piece$file.trim();
                    if (u) urls.push(u);
                  }
                  if (urls.length) {
                    _context4.next = 5;
                    break;
                  }
                  return _context4.abrupt("return");
                case 5:
                  uniq = Array.from(new Set(urls));
                  all = Promise.all(uniq.map(function (u) {
                    return _this4.preloadTexture(u);
                  }));
                  timeout = new Promise(function (resolve) {
                    setTimeout(function () {
                      return resolve();
                    }, timeoutMs);
                  });
                  _context4.next = 10;
                  return Promise.race([all, timeout]);
                case 10:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));
          function waitUntilFirstLevelImagesLoaded(_x2) {
            return _waitUntilFirstLevelImagesLoaded.apply(this, arguments);
          }
          return waitUntilFirstLevelImagesLoaded;
        }() // 1) ДОБАВЬТЕ хелпер рядом с остальными утилитами:
        ;

        _proto.anyToStringOrNull = function anyToStringOrNull(v) {
          if (v === undefined || v === null) return null;
          var s = String(v).trim();
          return s ? s : null;
        }

        /** После предзагрузки — принудительно применяем реальные URL для уровня 0. */;
        _proto.forceApplyMediaForLevel0 = function forceApplyMediaForLevel0() {
          for (var j = 0; j < this.per; j++) {
            var n = this.findNodeByLevelSlot(0, j);
            var piece = this.getPieceFor(0, j);
            if (!n || !piece) continue;
            var gidx = this.globalIndexOf(0, j);
            this.applyPieceTextIfChanged(n, piece, gidx, true); // withMedia=true
          }
        }

        /* ===================== RNG ===================== */;
        _proto.mulberry32 = function mulberry32(a) {
          return function () {
            var t = a += 0x6D2B79F5;
            t = Math.imul(t ^ t >>> 15, t | 1);
            t ^= t + Math.imul(t ^ t >>> 7, t | 61);
            return ((t ^ t >>> 14) >>> 0) / 4294967296;
          };
        };
        _proto.fisherYatesShuffle = function fisherYatesShuffle(arr, rng) {
          for (var i = arr.length - 1; i > 0; i--) {
            var j = Math.floor(rng() * (i + 1));
            var _ref6 = [arr[j], arr[j] = arr[i]];
            arr[i] = _ref6[0];
            arr[j] = _ref6[1];
          }
        };
        _createClass(TowerLayoutController, [{
          key: "lib",
          get: /* геттеры */
          function get() {
            var _instance;
            return (_instance = ColorTextureLibrary == null ? void 0 : ColorTextureLibrary.instance) != null ? _instance : null;
          }
        }, {
          key: "per",
          get: function get() {
            return Math.max(1, this.spawn.objectsPerLevel);
          }
        }, {
          key: "vis",
          get: function get() {
            return Math.max(1, this.spawn.visibleLevels);
          }
        }, {
          key: "basePieceScale",
          get: function get() {
            return this.spawn.targetVisualScale / Math.max(1e-6, this.spawn.baseScale);
          }
        }, {
          key: "levelStep",
          get: function get() {
            var baseVisualHeight = this.spawn.baseHeight * this.spawn.baseScale * this.basePieceScale;
            return baseVisualHeight + this.spawn.levelPaddingVisual;
          }
        }]);
        return TowerLayoutController;
      }(Component), _class6.EPS = 1e-5, _class6), (_descriptor31 = _applyDecoratedDescriptor(_class5.prototype, "spawn", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new TVS_SpawnLayout();
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class5.prototype, "scrollCtrl", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class5.prototype, "Falenames", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return ['Алиса', 'Борис', 'Вика', 'Гриша', 'Даша', 'Егор', 'Жанна', 'Зоя', 'Илья', 'Катя', 'Лёва', 'Мила', 'Никита', 'Оля', 'Паша', 'Рита', 'Света', 'Таня', 'Федя', 'Юля', 'Яна'];
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class5.prototype, "imagesPerFrame", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor35 = _applyDecoratedDescriptor(_class5.prototype, "textActivationMarginLevels", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor36 = _applyDecoratedDescriptor(_class5.prototype, "textsPerFrame", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 6;
        }
      })), _class5)) || _class4));
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