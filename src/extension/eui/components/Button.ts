//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

namespace eui {

    /**
     * The Button component is a commonly used rectangular button.
     * The Button component looks like it can be pressed.
     * The default skin has a text label and a icon display object.
     *
     * @event egret.TouchEvent.TOUCH_CANCEL canceled the touch
     *
     * @state up Button up state
     * @state down Button down state
     * @state disabled Button disabled state
     * @version Egret 2.4
     * @version eui 1.0
     * @platform Web,Native
     * @includeExample extension/eui/components/ButtonExample.ts
     * @language en_US
     */
    /**
     * Button ?????????????????????????????????Button ??????????????????????????????????????????????????????????????????????????????????????????
     *
     * @event egret.TouchEvent.TOUCH_CANCEL ??????????????????
     *
     * @state up ??????????????????
     * @state down ??????????????????
     * @state disabled ??????????????????
     * @version Egret 2.4
     * @version eui 1.0
     * @platform Web,Native
     * @includeExample extension/eui/components/ButtonExample.ts
     * @language zh_CN
     */
    export class Button extends Component {
        /**
         * Constructor.
         * @version Egret 2.4
         * @version eui 1.0
         * @platform Web,Native
         * @language en_US
         */
        /**
         * ????????????????????????
         * @version Egret 2.4
         * @version eui 1.0
         * @platform Web,Native
         * @language zh_CN
         */
        public constructor() {
            super();
            this.touchChildren = false;
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
        }

        /**
         * [SkinPart] A skin part that defines the label of the button.
         * @skinPart
         * @version Egret 2.4
         * @version eui 1.0
         * @platform Web,Native
         * @language en_US
         */
        /**
         * [SkinPart] ???????????????????????????
         * @skinPart
         * @version Egret 2.4
         * @version eui 1.0
         * @platform Web,Native
         * @language zh_CN
         */
        public labelDisplay:IDisplayText = null;

        /**
         * @private
         */
        private _label:string = "";
        /**
         * Text to appear on the Button control.
         * @version Egret 2.4
         * @version eui 1.0
         * @platform Web,Native
         * @language en_US
         */
        /**
         * ?????????????????????????????????
         * @version Egret 2.4
         * @version eui 1.0
         * @platform Web,Native
         * @language zh_CN
         */
        public get label():string {
            return this._label;
        }

        public set label(value:string) {
            this._label = value;
            if (this.labelDisplay) {
                this.labelDisplay.text = value;
            }
        }

        /**
         * [SkinPart] A skin part that defines an optional icon for the button.
         * @skinPart
         * @version Egret 2.4
         * @version eui 1.0
         * @platform Web,Native
         * @language en_US
         */
        /**
         * [SkinPart] ?????????????????????????????????
         * @skinPart
         * @version Egret 2.4
         * @version eui 1.0
         * @platform Web,Native
         * @language zh_CN
         */
        public iconDisplay:Image = null;

        /**
         * @private
         */
        private _icon:string|egret.Texture = null;
        /**
         * Icon to appear on the Button control.
         * @version Egret 2.4
         * @version eui 1.0
         * @platform Web,Native
         * @language en_US
         */
        /**
         * ????????????????????????????????????
         * @version Egret 2.4
         * @version eui 1.0
         * @platform Web,Native
         * @language zh_CN
         */
        public get icon():string|egret.Texture {
            return this._icon;
        }

        public set icon(value:string|egret.Texture) {
            this._icon = value;
            if (this.iconDisplay) {
                this.iconDisplay.source = value;
            }
        }

        /**
         * @private
         * ????????????????????? TouchEvent.TOUCH_BEGIN ????????????????????????????????????
         */
        private touchCaptured:boolean = false;
        /**
         * This method handles the touchCancle events
         * @param  The <code>egret.TouchEvent</code> object.
         * @version Egret 3.0.1
         * @version eui 1.0
         * @platform Web,Native
         * @language en_US
         */
        /**
         * ???????????????????????????
         * @param event ?????? <code>egret.TouchEvent</code> ????????????
         * @version Egret 3.0.1
         * @version eui 1.0
         * @platform Web,Native
         * @language zh_CN
         */
        protected onTouchCancle(event:egret.TouchEvent):void {
            let stage = event.$currentTarget;
            stage.removeEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onTouchCancle, this);
            stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onStageTouchEnd, this);
            this.touchCaptured = false;
            this.invalidateState();
        }
        /**
         * This method handles the touch events
         * @param  The <code>egret.TouchEvent</code> object.
         * @version Egret 2.4
         * @version eui 1.0
         * @platform Web,Native
         * @language en_US
         */
        /**
         * ?????????????????????
         * @param event ?????? <code>egret.TouchEvent</code> ????????????
         * @version Egret 2.4
         * @version eui 1.0
         * @platform Web,Native
         * @language zh_CN
         */
        protected onTouchBegin(event:egret.TouchEvent):void {
            this.$stage.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onTouchCancle, this);
            this.$stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onStageTouchEnd, this);
            this.touchCaptured = true;
            this.invalidateState();
            event.updateAfterEvent();
        }

        /**
         * @private
         * ???????????????????????????
         */
        private onStageTouchEnd(event:egret.Event):void {
            let stage = event.$currentTarget;
            stage.removeEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onTouchCancle, this);
            stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onStageTouchEnd, this);
            if (this.contains(event.target)){
                this.buttonReleased();
            }
            this.touchCaptured = false;
            this.invalidateState();
        }

        /**
         * @inheritDoc
         *
         * @version Egret 2.4
         * @version eui 1.0
         * @platform Web,Native
         */
        protected getCurrentState():string {
            if (!this.enabled)
                return "disabled";

            if (this.touchCaptured)
                return "down";

            return "up";
        }

        /**
         * @inheritDoc
         *
         * @version Egret 2.4
         * @version eui 1.0
         * @platform Web,Native
         */
        protected partAdded(partName:string, instance:any):void {
            if (instance === this.labelDisplay) {
                this.labelDisplay.text = this._label;
            }
            else if (instance == this.iconDisplay) {
                this.iconDisplay.source = this._icon;
            }
        }

        /**
         * This method is called when handling a <code>egret.TouchEvent.TOUCH_END</code> event
         * when the user touches on the button. It is only called when the button
         * is the target and when <code>touchCaptured</code> is <code>true</code>.
         * @version Egret 2.4
         * @version eui 1.0
         * @platform Web,Native
         * @language en_US
         */
        /**
         * ???????????????????????????????????? <code>egret.TouchEvent.TOUCH_END</code> ?????????????????????????????????
         * ????????????????????????????????? <code>touchCaptured</code> ??? <code>true</code> ??????????????????????????????
         * @version Egret 2.4
         * @version eui 1.0
         * @platform Web,Native
         * @language zh_CN
         */
        protected buttonReleased():void {
        }
    }
}