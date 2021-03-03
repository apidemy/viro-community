"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright (c) 2015-present, Viro Media, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
var react_native_1 = require("react-native");
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var NativeModules = require('react-native').NativeModules;
var createReactClass = require('create-react-class');
var ViroScene = createReactClass({
    propTypes: __assign(__assign({}, react_native_1.View.propTypes), { onHover: prop_types_1.default.func, onClick: prop_types_1.default.func, onClickState: prop_types_1.default.func, onTouch: prop_types_1.default.func, onScroll: prop_types_1.default.func, onSwipe: prop_types_1.default.func, onFuse: prop_types_1.default.oneOfType([
            prop_types_1.default.shape({
                callback: prop_types_1.default.func.isRequired,
                timeToFuse: prop_types_1.default.number
            }),
            prop_types_1.default.func
        ]), onDrag: prop_types_1.default.func, onPinch: prop_types_1.default.func, onRotate: prop_types_1.default.func, onPlatformUpdate: prop_types_1.default.func, onCameraTransformUpdate: prop_types_1.default.func, ignoreEventHandling: prop_types_1.default.bool, dragType: prop_types_1.default.oneOf(["FixedDistance", "FixedDistanceOrigin", "FixedToWorld", "FixedToPlane"]), dragPlane: prop_types_1.default.shape({
            planePoint: prop_types_1.default.arrayOf(prop_types_1.default.number),
            planeNormal: prop_types_1.default.arrayOf(prop_types_1.default.number),
            maxDistance: prop_types_1.default.number
        }), 
        /**
         * Describes the acoustic properties of the room around the user
         */
        soundRoom: prop_types_1.default.shape({
            // The x, y and z dimensions of the room
            size: prop_types_1.default.arrayOf(prop_types_1.default.number).isRequired,
            wallMaterial: prop_types_1.default.string,
            ceilingMaterial: prop_types_1.default.string,
            floorMaterial: prop_types_1.default.string,
        }), physicsWorld: prop_types_1.default.shape({
            gravity: prop_types_1.default.arrayOf(prop_types_1.default.number).isRequired,
            drawBounds: prop_types_1.default.bool,
        }), postProcessEffects: prop_types_1.default.arrayOf(prop_types_1.default.string) }),
    _onHover: function (event /*: Event*/) {
        this.props.onHover && this.props.onHover(event.nativeEvent.isHovering, event.nativeEvent.position, event.nativeEvent.source);
    },
    _onClick: function (event /*: Event*/) {
        this.props.onClick && this.props.onClick(event.nativeEvent.position, event.nativeEvent.source);
    },
    _onClickState: function (event /*: Event*/) {
        this.props.onClickState && this.props.onClickState(event.nativeEvent.clickState, event.nativeEvent.position, event.nativeEvent.source);
        var CLICKED = 3; // Value representation of Clicked ClickState within EventDelegateJni.
        if (event.nativeEvent.clickState == CLICKED) {
            this._onClick(event);
        }
    },
    _onTouch: function (event /*: Event*/) {
        this.props.onTouch && this.props.onTouch(event.nativeEvent.touchState, event.nativeEvent.touchPos, event.nativeEvent.source);
    },
    _onScroll: function (event /*: Event*/) {
        this.props.onScroll && this.props.onScroll(event.nativeEvent.scrollPos, event.nativeEvent.source);
    },
    _onSwipe: function (event /*: Event*/) {
        this.props.onSwipe && this.props.onSwipe(event.nativeEvent.swipeState, event.nativeEvent.source);
    },
    _onFuse: function (event /*: Event*/) {
        if (this.props.onFuse) {
            if (typeof this.props.onFuse === 'function') {
                this.props.onFuse(event.nativeEvent.source);
            }
            else if (this.props.onFuse != undefined && this.props.onFuse.callback != undefined) {
                this.props.onFuse.callback(event.nativeEvent.source);
            }
        }
    },
    _onPinch: function (event /*: Event*/) {
        this.props.onPinch && this.props.onPinch(event.nativeEvent.pinchState, event.nativeEvent.scaleFactor, event.nativeEvent.source);
    },
    _onRotate: function (event /*: Event*/) {
        this.props.onRotate && this.props.onRotate(event.nativeEvent.rotateState, event.nativeEvent.rotationFactor, event.nativeEvent.source);
    },
    _onDrag: function (event /*: Event*/) {
        this.props.onDrag && this.props.onDrag(event.nativeEvent.dragToPos, event.nativeEvent.source);
    },
    _onPlatformUpdate: function (event /*: Event*/) {
        /**
         * ##### DEPRECATION WARNING - 'vrPlatform' is deprecated in favor of 'platform'! Support
         * for 'vrPlatform' may be removed in the future.
         */
        event.nativeEvent.platformInfoViro.vrPlatform = event.nativeEvent.platformInfoViro.platform;
        this.props.onPlatformUpdate && this.props.onPlatformUpdate(event.nativeEvent.platformInfoViro);
    },
    _onCameraTransformUpdate: function (event /*: Event*/) {
        var cameraTransform = {
            // ** DEPRECATION WARNING ** The cameraTransform key will be deprecated in a future release, 
            cameraTransform: {
                position: [event.nativeEvent.cameraTransform[0], event.nativeEvent.cameraTransform[1], event.nativeEvent.cameraTransform[2]],
                rotation: [event.nativeEvent.cameraTransform[3], event.nativeEvent.cameraTransform[4], event.nativeEvent.cameraTransform[5]],
                forward: [event.nativeEvent.cameraTransform[6], event.nativeEvent.cameraTransform[7], event.nativeEvent.cameraTransform[8]],
                up: [event.nativeEvent.cameraTransform[9], event.nativeEvent.cameraTransform[10], event.nativeEvent.cameraTransform[11]]
            },
            position: [event.nativeEvent.cameraTransform[0], event.nativeEvent.cameraTransform[1], event.nativeEvent.cameraTransform[2]],
            rotation: [event.nativeEvent.cameraTransform[3], event.nativeEvent.cameraTransform[4], event.nativeEvent.cameraTransform[5]],
            forward: [event.nativeEvent.cameraTransform[6], event.nativeEvent.cameraTransform[7], event.nativeEvent.cameraTransform[8]],
            up: [event.nativeEvent.cameraTransform[9], event.nativeEvent.cameraTransform[10], event.nativeEvent.cameraTransform[11]]
        };
        this.props.onCameraTransformUpdate && this.props.onCameraTransformUpdate(cameraTransform);
    },
    findCollisionsWithRayAsync: function (from, to, closest, viroTag) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, NativeModules.VRTSceneModule.findCollisionsWithRayAsync(react_native_1.findNodeHandle(this), from, to, closest, viroTag)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    },
    findCollisionsWithShapeAsync: function (from, to, shapeString, shapeParam, viroTag) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, NativeModules.VRTSceneModule.findCollisionsWithShapeAsync(react_native_1.findNodeHandle(this), from, to, shapeString, shapeParam, viroTag)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    },
    /**
     * ##### DEPRECATION WARNING - this prop may be removed in future releases #####
     */
    getCameraPositionAsync: function () {
        return __awaiter(this, void 0, void 0, function () {
            var orientation;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.warn("[Viro] ViroScene.getCameraPositionAsync has been DEPRECATED. Please use getCameraOrientationAsync instead.");
                        return [4 /*yield*/, NativeModules.VRTCameraModule.getCameraOrientation(react_native_1.findNodeHandle(this))];
                    case 1:
                        orientation = _a.sent();
                        position = [orientation[0], orientation[1], orientation[2]];
                        return [2 /*return*/, position];
                }
            });
        });
    },
    getCameraOrientationAsync: function () {
        return __awaiter(this, void 0, void 0, function () {
            var orientation;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, NativeModules.VRTCameraModule.getCameraOrientation(react_native_1.findNodeHandle(this))];
                    case 1:
                        orientation = _a.sent();
                        return [2 /*return*/, {
                                position: [orientation[0], orientation[1], orientation[2]],
                                rotation: [orientation[3], orientation[4], orientation[5]],
                                forward: [orientation[6], orientation[7], orientation[8]],
                                up: [orientation[9], orientation[10], orientation[11]],
                            }];
                }
            });
        });
    },
    getChildContext: function () {
        return {
            cameraDidMount: function (camera) {
                if (camera.props.active) {
                    NativeModules.VRTCameraModule.setSceneCamera(react_native_1.findNodeHandle(this), react_native_1.findNodeHandle(camera));
                }
            }.bind(this),
            cameraWillUnmount: function (camera) {
                if (camera.props.active) {
                    NativeModules.VRTCameraModule.removeSceneCamera(react_native_1.findNodeHandle(this), react_native_1.findNodeHandle(camera));
                }
            }.bind(this),
            cameraDidUpdate: function (camera, active) {
                if (active) {
                    NativeModules.VRTCameraModule.setSceneCamera(react_native_1.findNodeHandle(this), react_native_1.findNodeHandle(camera));
                }
                else {
                    NativeModules.VRTCameraModule.removeSceneCamera(react_native_1.findNodeHandle(this), react_native_1.findNodeHandle(camera));
                }
            }.bind(this),
        };
    },
    render: function () {
        // Uncomment this line to check for misnamed props
        //checkMisnamedProps("ViroScene", this.props);
        var _this = this;
        var timeToFuse = undefined;
        if (this.props.onFuse != undefined && typeof this.props.onFuse === 'object') {
            timeToFuse = this.props.onFuse.timeToFuse;
        }
        return (<VRTScene {...this.props} ref={function (component) { _this._component = component; }} canHover={this.props.onHover != undefined} canClick={this.props.onClick != undefined || this.props.onClickState != undefined} canTouch={this.props.onTouch != undefined} canScroll={this.props.onScroll != undefined} canSwipe={this.props.onSwipe != undefined} canFuse={this.props.onFuse != undefined} canDrag={this.props.onDrag != undefined} canPinch={this.props.onPinch != undefined} canRotate={this.props.onRotate != undefined} canCameraTransformUpdate={this.props.onCameraTransformUpdate != undefined} onHoverViro={this._onHover} onClickViro={this._onClickState} onTouchViro={this._onTouch} onScrollViro={this._onScroll} onSwipeViro={this._onSwipe} onFuseViro={this._onFuse} onDragViro={this._onDrag} onRotateViro={this._onRotate} onPinchViro={this._onPinch} onPlatformUpdateViro={this._onPlatformUpdate} onCameraTransformUpdateViro={this._onCameraTransformUpdate} timeToFuse={timeToFuse}/>);
    },
});
ViroScene.childContextTypes = {
    cameraDidMount: prop_types_1.default.func,
    cameraWillUnmount: prop_types_1.default.func,
    cameraDidUpdate: prop_types_1.default.func,
};
var VRTScene = react_native_1.requireNativeComponent('VRTScene', ViroScene, {
    nativeOnly: {
        canHover: true,
        canClick: true,
        canTouch: true,
        canScroll: true,
        canSwipe: true,
        canDrag: true,
        canPinch: true,
        canRotate: true,
        canFuse: true,
        canCollide: true,
        canCameraTransformUpdate: true,
        onHoverViro: true,
        onClickViro: true,
        onTouchViro: true,
        onScrollViro: true,
        onSwipeViro: true,
        onDragViro: true,
        onPinchViro: true,
        onRotateViro: true,
        onPlatformUpdateViro: true,
        onCameraTransformUpdateViro: true,
        onFuseViro: true,
        timeToFuse: true,
        physicsBody: true,
        onCollisionViro: true,
    }
});
module.exports = ViroScene;