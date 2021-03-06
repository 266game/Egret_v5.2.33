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
namespace egret {
    // export interface TextField{
    //     addEventListener<Z>(type: "focusIn" |
    //                               "focusOut"
    //         , listener: (this: Z, e: FocusEvent) => void, thisObject: Z, useCapture?: boolean, priority?: number);
    //     addEventListener(type: string, listener: Function, thisObject: any, useCapture?: boolean, priority?: number);
    // }
    /**
     * When the user changes the focus from one object in the display list to another object, the object dispatches a FocusEvent object. Currently only supports input text.
     * Focus events: FocusEvent.FOCUS_IN FocusEvent.FOCUS_OUT
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * ????????????????????????????????????????????????????????????????????????????????????????????? FocusEvent ???????????????????????????????????????
     * ???????????????FocusEvent.FOCUS_IN FocusEvent.FOCUS_OUT
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    export class FocusEvent extends egret.Event {

        /**
         * Gets focus
         * @version Egret 2.4
         * @platform Web,Native
         * @language en_US
         */
        /**
         * ????????????
         * @version Egret 2.4
         * @platform Web,Native
         * @language zh_CN
         */
        public static FOCUS_IN:"focusIn" = "focusIn";

        /**
         * Loses focus
         * @version Egret 2.4
         * @platform Web,Native
         * @language en_US
         */
        /**
         * ????????????
         * @version Egret 2.4
         * @platform Web,Native
         * @language zh_CN
         */
        public static FOCUS_OUT:"focusOut" = "focusOut";

        /**
         * Create a egret.FocusEvent objects
         * @param type  The type of the event, accessible as Event.type.
         * @param bubbles  Determines whether the Event object participates in the bubbling stage of the event flow. The default value is false.
         * @param cancelable Determines whether the Event object can be canceled. The default values is false.
         * @version Egret 2.4
         * @platform Web,Native
         * @language en_US
         */
        /**
         * ???????????? egret.FocusEvent ??????
         * @param type  ?????????????????????????????? Event.type ?????????
         * @param bubbles  ?????? Event ????????????????????????????????????????????????????????? false???
         * @param cancelable ???????????????????????? Event ????????????????????? false???
         * @version Egret 2.4
         * @platform Web,Native
         * @language zh_CN
         */
        public constructor(type:string, bubbles:boolean = false, cancelable:boolean = false) {
            super(type, bubbles, cancelable);

        }
    }
}