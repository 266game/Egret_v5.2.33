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

    /**
     * The Video class lets you work with video in an application.
     * The Video class lets you create a Video object, load and play an external video file into that object.
     * Note: On most mobile device, the video is playback in the full screen mode.<br/>
     *
     * @param url URL of the media to play, Video will start to load if the url is not empty
     *
     * @event egret.Event.COMPLETE Dispatch when the video resource is loaded and ready to play
     * @event egret.Event.ENDED Dispatch when the video playback ended
     * @event egret.IOErrorEvent.IO_ERROR when the video is failed to load
     * @version Egret 2.4
     * @platform Web
     * @includeExample egret/media/Video.ts
     * @language en_US
     */
    /**
     * Video ???????????????????????????????????????????????? Video ??????????????? Video ?????????????????????????????????????????????????????????????????????<br/>
     * ??????: ?????????????????????????????????????????????????????????????????????????????????????????? play() ????????????????????????????????????????????????Stage??????
     * @see http://edn.egret.com/cn/docs/page/657 ????????????
     *
     * @param url ?????????????????????URL?????????url????????????Video???????????????????????????
     *
     * @event egret.Event.COMPLETE ???????????????????????????
     * @event egret.Event.ENDED ???????????????????????????
     * @event egret.IOErrorEvent.IO_ERROR ???????????????????????????
     * @version Egret 2.4
     * @platform Web
     * @includeExample egret/media/Video.ts
     * @language zh_CN
     */
    export interface Video extends DisplayObject {
        /**
         * Initiates loading of an external video file from the specified URL.
         * @param url Audio file URL
         * * @param cache Should cache the video???only  used in Native
         * @version Egret 2.4
         * @platform Web,Native
         * @language en_US
         */
        /**
         * ??????????????? URL ????????????????????????????????????
         * @param url ???????????????????????????URL
         * @param cache ???????????????????????????????????? Native ?????????
         * @version Egret 2.4
         * @platform Web,Native
         * @language zh_CN
         */
        load(url:string,cache?:boolean): void;

        /**
         * Play back the video.
         * @param startTime The initial position in seconds at which playback should start, (default = 0)
         * @param loop Defines should play the video again when the video is ended. (default = false)
         * @version Egret 2.4
         * @platform Web,Native
         * @language en_US
         */
        /**
         * ???????????????
         * @param startTime ?????????????????????????????????????????????????????????????????????????????????????????????
         * @param loop ??????????????????????????????????????? false
         * @version Egret 2.4
         * @platform Web,Native
         * @language zh_CN
         */
        play(startTime?:number, loop?:boolean);

        /**
         * Closes the stream, causing any download of data to cease
         * @version Egret 2.4
         * @platform Web,Native
         * @language en_US
         */
        /**
         * ???????????????????????????????????????????????????
         * @version Egret 2.4
         * @platform Web,Native
         * @language zh_CN
         */
        close(): void;

        /**
         * The URL of the video you want to play.
         * @version Egret 2.4
         * @platform Web,Native
         * @language en_US
         */
        /**
         * ????????????????????????URL
         * @version Egret 2.4
         * @platform Web,Native
         * @language zh_CN
         */
        src: string;

        /**
         * The URL of an image you want to display before the video is loaded or video cannot been draw on the canvas on some mobile device.
         * @version Egret 2.4
         * @platform Web,Native
         * @language en_US
         */
        /**
         * ??????????????????????????????????????? video ?????? canvas ???????????????????????????????????????????????????
         * @version Egret 2.4
         * @platform Web,Native
         * @language zh_CN
         */
        poster: string;

        /**
         * Should play the video in fullscreen mode (default = true).
         * Currently only supports full-screen mobile terminal web.
         * @version Egret 2.4
         * @platform Web,Native
         * @language en_US
         */
        /**
         * ????????????????????????????????????????????? true??????
         * ??????????????? web ??????????????????
         * @version Egret 2.4
         * @platform Web,Native
         * @language zh_CN
         */
        fullscreen: boolean;
        /**
         * The volume, ranging from 0 (silent) to 1 (full volume).
         * @version Egret 2.4
         * @platform Web,Native
         * @language en_US
         */
        /**
         * ??????????????? 0??????????????? 1?????????????????????
         * @version Egret 2.4
         * @platform Web,Native
         * @language zh_CN
         */
        volume: number;

        /**
         * When the video is playing, the position property indicates
         * in seconds the current point that is being played in the video file.
         * @version Egret 2.4
         * @platform Web,Native
         * @language en_US
         */
        /**
         * ?????????????????????position ?????????????????????????????????????????????????????????????????????
         * @version Egret 2.4
         * @platform Web,Native
         * @language zh_CN
         */
        position: number;

        /**
         * Pause the video playing.
         * @version Egret 2.4
         * @platform Web,Native
         * @language en_US
         */
        /**
         * ???????????????
         * @version Egret 2.4
         * @platform Web,Native
         * @language zh_CN
         */
        pause(): void;

        /**
         * Get bitmapData of the video file, you can use the video as bitmapData on the stage.
         * Note: On most mobile device, the video is playback in the full screen mode.
         * So you can just use the play() method instead of draw it on the Stage
         * @version Egret 2.4
         * @platform Web
         * @language en_US
         */
        /**
         *  ??????????????? bitmapData, ???????????????????????????????????????
         * ????????? ???????????????????????????????????????????????????????????????????????????????????? play() ????????????????????????????????????????????????Stage??????
         * @version Egret 2.4
         * @platform Web
         * @language zh_CN
         */
        bitmapData?: BitmapData;

        /**
         * Whether current video is paused.
         * @version Egret 2.4
         * @platform Web,Native
         * @readOnly
         * @language en_US
         */
        /**
         * ????????????????????????????????????
         * @version Egret 2.4
         * @platform Web,Native
         * @readOnly
         * @language zh_CN
         */
        paused:boolean;
        /**
         * Length of the current video (in seconds).
         * @version Egret 3.0.8
         * @platform Web,Native
         * @readOnly
         * @language en_US
         */
        /**
         * ?????????????????????????????????????????????
         * @version Egret 3.0.8
         * @platform Web,Native
         * @readOnly
         * @language zh_CN
         */
        length:number;
    }
    /**
     * @copy egret.Video
     */
    export let Video:{
        new (url?:string,cache?:boolean): Video
    };
}