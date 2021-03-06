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

    let UIComponentClass = "eui.UIComponent";

    /**
     * The TileLayout class arranges layout elements in columns and rows
     * of equally-sized cells.
     * The TileLayout class uses a number of properties that control orientation,
     * count, size, gap and justification of the columns and the rows
     * as well as element alignment within the cells.
     *
     * @version Egret 2.4
     * @version eui 1.0
     * @platform Web,Native
     * @includeExample  extension/eui/layout/TileLayoutExample.ts
     * @language en_US
     */
    /**
     * TileLayout ???????????????????????????????????????????????????????????????
     * TileLayout ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
     *
     * @version Egret 2.4
     * @version eui 1.0
     * @platform Web,Native
     * @includeExample  extension/eui/layout/TileLayoutExample.ts
     * @language zh_CN
     */
    export class TileLayout extends LayoutBase {

        /**
         * Constructor.
         * @version Egret 2.4
         * @version eui 1.0
         * @platform Web,Native
         * @language en_US
         */
        /**
         * ???????????????
         * @version Egret 2.4
         * @version eui 1.0
         * @platform Web,Native
         * @language zh_CN
         */
        public constructor() {
            super();
        }

        /**
         * @private
         * ??????horizontalGap??????????????????
         */
        private explicitHorizontalGap:number = NaN;

        /**
         * @private
         */
        private _horizontalGap:number = 6;
        /**
         * Horizontal space between columns, in pixels.
         *
         * @default 6
         *
         * @version Egret 2.4
         * @version eui 1.0
         * @platform Web,Native
         * @language en_US
         */
        /**
         * ???????????????????????????????????????????????????
         *
         * @default 6
         *
         * @version Egret 2.4
         * @version eui 1.0
         * @platform Web,Native
         * @language zh_CN
         */
        public get horizontalGap():number {
            return this._horizontalGap;
        }

        public set horizontalGap(value:number) {
            value = +value;
            if (value === this._horizontalGap)
                return;
            this.explicitHorizontalGap = value;

            this._horizontalGap = value;
            this.invalidateTargetLayout();
        }

        /**
         * @private
         * ??????verticalGap??????????????????
         */
        private explicitVerticalGap:number = NaN;

        /**
         * @private
         */
        private _verticalGap:number = 6;

        /**
         * Vertical space between rows, in pixels.
         *
         * @default 6
         *
         * @version Egret 2.4
         * @version eui 1.0
         * @platform Web,Native
         * @language en_US
         */
        /**
         * ???????????????????????????????????????????????????
         *
         * @default 6
         *
         * @version Egret 2.4
         * @version eui 1.0
         * @platform Web,Native
         * @language zh_CN
         */
        public get verticalGap():number {
            return this._verticalGap;
        }

        public set verticalGap(value:number) {
            value = +value;
            if (value === this._verticalGap)
                return;
            this.explicitVerticalGap = value;
            this._verticalGap = value;
            this.invalidateTargetLayout();
        }


        /**
         * @private
         */
        private _columnCount:number = -1;
        /**
         * Contain the actual column count.
         *
         * @default -1
         *
         * @version Egret 2.4
         * @version eui 1.0
         * @platform Web,Native
         * @language en_US
         */
        /**
         *  ??????????????????
         *
         * @default -1
         *
         * @version Egret 2.4
         * @version eui 1.0
         * @platform Web,Native
         * @language zh_CN
         */
        public get columnCount():number {
            return this._columnCount;
        }

        /**
         * @private
         */
        private _requestedColumnCount:number = 0;
        /**
         * Number of columns to be displayed.
         * <p>Set to 0 to allow the TileLayout to determine
         * the column count automatically.</p>
         * <p>If the <code>orientation</code> property is set to <code>TileOrientation.ROWS</code>,
         * then setting this property has no effect
         * In this case, the <code>rowCount</code> is explicitly set, and the
         * container width is explicitly set. </p>
         *
         * @default 0
         *
         * @version Egret 2.4
         * @version eui 1.0
         * @platform Web,Native
         * @language en_US
         */
        /**
         * ?????????????????????
         * <p>????????? 0 ????????? TileLayout ????????????????????????</p>
         * <p>????????? <code>orientation</code> ??????????????? <code>TileOrientation.ROWS</code>???
         * ?????????????????????????????????????????????????????????????????????????????? code>rowCount</code>?????????????????????????????????</p>
         *
         * @default 0
         *
         * @version Egret 2.4
         * @version eui 1.0
         * @platform Web,Native
         * @language zh_CN
         */
        public get requestedColumnCount():number {
            return this._requestedColumnCount;
        }

        public set requestedColumnCount(value:number) {
            value = +value || 0;
            if (this._requestedColumnCount === value)
                return;
            this._requestedColumnCount = value;
            this._columnCount = value;
            this.invalidateTargetLayout();
        }


        /**
         * @private
         */
        private _rowCount:number = -1;
        /**
         * The row count.
         *
         * @version Egret 2.4
         * @version eui 1.0
         * @platform Web,Native
         * @language en_US
         */
        /**
         *  ????????????
         *
         * @version Egret 2.4
         * @version eui 1.0
         * @platform Web,Native
         * @language zh_CN
         */
        public get rowCount():number {
            return this._rowCount;
        }

        /**
         * @private
         */
        private _requestedRowCount:number = 0;
        /**
         * Number of rows to be displayed.
         * <p>Set to 0 to remove explicit override and allow the TileLayout to determine
         * the row count automatically.</p>
         * <p>If the <code>orientation</code> property is set to
         * <code>TileOrientation.COLUMNS</code>, setting this property has no effect.
         * in this case, <code>columnCount</code> is explicitly set, and the
         * container height is explicitly set.</p>
         *
         * @default 0
         *
         * @version Egret 2.4
         * @version eui 1.0
         * @platform Web,Native
         * @language en_US
         */
        /**
         * ?????????????????????
         * <code>????????? -1 ?????????????????????????????? TileLayout ????????????????????????</code>
         * <code>????????? <code>orientation</code> ??????????????? <code>TileOrientation.COLUMNS</code>???
         * ?????????????????????????????????????????????????????????????????????????????? <code>columnCount</code>?????????????????????????????????</code>
         *
         * @default 0
         *
         * @version Egret 2.4
         * @version eui 1.0
         * @platform Web,Native
         * @language zh_CN
         */
        public get requestedRowCount():number {
            return this._requestedRowCount;
        }

        public set requestedRowCount(value:number) {
            value = +value || 0;
            if (this._requestedRowCount == value)
                return;
            this._requestedRowCount = value;
            this._rowCount = value;
            this.invalidateTargetLayout();
        }


        /**
         * @private
         * ???????????????????????????
         */
        private explicitColumnWidth:number = NaN;

        /**
         * @private
         */
        private _columnWidth:number = NaN;
        /**
         * Contain the actual column width, in pixels.
         * <p>If not explicitly set, the column width is
         * determined from the width of the widest element. </p>
         *
         * @default NaN
         *
         * @version Egret 2.4
         * @version eui 1.0
         * @platform Web,Native
         * @language en_US
         */
        /**
         * ?????????????????????????????????????????????
         * <p>???????????????????????????????????????????????????????????????????????????</p>
         *
         * @default NaN
         *
         * @version Egret 2.4
         * @version eui 1.0
         * @platform Web,Native
         * @language zh_CN
         */
        public get columnWidth():number {
            return this._columnWidth;
        }

        public set columnWidth(value:number) {
            value = +value;
            if (value === this._columnWidth)
                return;
            this.explicitColumnWidth = value;
            this._columnWidth = value;
            this.invalidateTargetLayout();
        }

        /**
         * @private
         * ???????????????????????????
         */
        private explicitRowHeight:number = NaN;

        /**
         * @private
         */
        private _rowHeight:number = NaN;
        /**
         * The row height, in pixels.
         * <p>If not explicitly set, the row height is
         * determined from the maximum of elements' height.</p>
         *
         * @default NaN
         *
         * @version Egret 2.4
         * @version eui 1.0
         * @platform Web,Native
         * @language en_US
         */
        /**
         * ?????????????????????????????????
         * <p>???????????????????????????????????????????????????????????????????????????<p>
         *
         * @default NaN
         *
         * @version Egret 2.4
         * @version eui 1.0
         * @platform Web,Native
         * @language zh_CN
         */
        public get rowHeight():number {
            return this._rowHeight;
        }

        public set rowHeight(value:number) {
            value = +value;
            if (value === this._rowHeight)
                return;
            this.explicitRowHeight = value;
            this._rowHeight = value;
            this.invalidateTargetLayout();
        }


        /**
         * @private
         */
        private _paddingLeft:number = 0;
        /**
         * @copy eui.LinearLayoutBase#paddingLeft
         *
         * @version Egret 2.4
         * @version eui 1.0
         * @platform Web,Native
         */
        public get paddingLeft():number {
            return this._paddingLeft;
        }

        public set paddingLeft(value:number) {
            value = +value || 0;
            if (this._paddingLeft == value)
                return;

            this._paddingLeft = value;
            this.invalidateTargetLayout();
        }

        /**
         * @private
         */
        private _paddingRight:number = 0;
        /**
         * @copy eui.LinearLayoutBase#paddingRight
         *
         * @version Egret 2.4
         * @version eui 1.0
         * @platform Web,Native
         */
        public get paddingRight():number {
            return this._paddingRight;
        }

        public set paddingRight(value:number) {
            value = +value || 0;
            if (this._paddingRight === value)
                return;

            this._paddingRight = value;
            this.invalidateTargetLayout();
        }

        /**
         * @private
         */
        private _paddingTop:number = 0;
        /**
         * @copy eui.LinearLayoutBase#paddingTop
         *
         * @version Egret 2.4
         * @version eui 1.0
         * @platform Web,Native
         */
        public get paddingTop():number {
            return this._paddingTop;
        }

        public set paddingTop(value:number) {
            value = +value || 0;
            if (this._paddingTop == value)
                return;
            this._paddingTop = value;
            this.invalidateTargetLayout();
        }

        /**
         * @private
         */
        private _paddingBottom:number = 0;
        /**
         * @copy eui.LinearLayoutBase#paddingBottom
         *
         * @version Egret 2.4
         * @version eui 1.0
         * @platform Web,Native
         */
        public get paddingBottom():number {
            return this._paddingBottom;
        }

        public set paddingBottom(value:number) {
            value = +value || 0;
            if (this._paddingBottom === value)
                return;
            this._paddingBottom = value;
            this.invalidateTargetLayout();
        }


        /**
         * @private
         */
        private _horizontalAlign:string = JustifyAlign.JUSTIFY;
        /**
         * Specifies how to align the elements within the cells in the horizontal direction.
         * Supported values are
         * HorizontalAlign.LEFT???HorizontalAlign.CENTER???
         * HorizontalAlign.RIGHT???JustifyAlign.JUSTIFY???
         *
         * @default <code>JustifyAlign.JUSTIFY</code>
         *
         * @version Egret 2.4
         * @version eui 1.0
         * @platform Web,Native
         * @language en_US
         */
        /**
         * ???????????????????????????????????????????????????????????????????????????
         * HorizontalAlign.LEFT???HorizontalAlign.CENTER???
         * HorizontalAlign.RIGHT???JustifyAlign.JUSTIFY???
         *
         * @default <code>JustifyAlign.JUSTIFY</code>
         *
         * @version Egret 2.4
         * @version eui 1.0
         * @platform Web,Native
         * @language zh_CN
         */
        public get horizontalAlign():string {
            return this._horizontalAlign;
        }

        public set horizontalAlign(value:string) {
            if (this._horizontalAlign == value)
                return;

            this._horizontalAlign = value;
            this.invalidateTargetLayout();
        }

        /**
         * @private
         */
        private _verticalAlign:string = JustifyAlign.JUSTIFY;

        /**
         * ????????????????????????????????????????????????????????????
         * ??????????????? VerticalAlign.TOP???VerticalAlign.MIDDLE???
         * VerticalAlign.BOTTOM???JustifyAlign.JUSTIFY???
         * ????????????JustifyAlign.JUSTIFY???
         *
         * @default <code>eui.JustifyAlign.JUSTIFY</code>
         *
         * @version Egret 2.4
         * @version eui 1.0
         * @platform Web,Native
         * @language en_US
         */
        /**
         * Specifies how to align the elements within the cells in the vertical direction.
         * Supported values are
         * VerticalAlign.TOP???VerticalAlign.MIDDLE???
         * VerticalAlign.BOTTOM???JustifyAlign.JUSTIFY???
         *
         * @default <code>eui.JustifyAlign.JUSTIFY</code>
         *
         * @version Egret 2.4
         * @version eui 1.0
         * @platform Web,Native
         * @language zh_CN
         */
        public get verticalAlign():string {
            return this._verticalAlign;
        }

        public set verticalAlign(value:string) {
            if (this._verticalAlign == value)
                return;

            this._verticalAlign = value;
            this.invalidateTargetLayout();
        }

        /**
         * @private
         */
        private _columnAlign:string = ColumnAlign.LEFT;

        /**
         * Specifies how to justify the fully visible columns to the container width.
         *
         * <p>When set to <code>ColumnAlign.LEFT</code> it turns column justification off.
         *  There may be partially visible columns or whitespace between the last column and
         *  the right edge of the container.  This is the default value.</p>
         *
         * <p>When set to <code>ColumnAlign.JUSTIFY_USING_GAP</code> the <code>horizontalGap</code>
         * actual value increases so that
         * the last fully visible column right edge aligns with the container's right edge.
         * In case there is only a single fully visible column, the <code>horizontalGap</code> actual value
         * increases so that it pushes any partially visible column beyond the right edge
         * of the container.
         * Note that explicitly setting the <code>horizontalGap</code> property does not turn off
         * justification. It only determines the initial gap value.
         * Justification may increases it.</p>
         *
         * <p>When set to <code>ColumnAlign.JUSTIFY_USING_WIDTH</code> the <code>columnWidth</code>
         * actual value increases so that
         * the last fully visible column right edge aligns with the container's right edge.
         * Note that explicitly setting the <code>columnWidth</code> property does not turn off justification.
         * It only determines the initial column width value.
         * Justification may increases it.</p>
         *
         * @default ColumnAlign.LEFT
         *
         * @version Egret 2.4
         * @version eui 1.0
         * @platform Web,Native
         * @language en_US
         */
        /**
         * ??????????????????????????????????????????????????????
         *
         * <p>????????? <code>ColumnAlign.LEFT</code> ????????????????????????????????????
         * ??????????????????????????????????????????????????????????????????????????????????????????????????????</p>
         *
         * <p>????????? <code>ColumnAlign.JUSTIFY_USING_GAP</code> ??????<code>horizontalGap</code> ????????????????????????
         * ???????????????????????????????????????????????????????????????????????????????????????????????????????????????
         * <code>horizontalGap</code> ?????????????????????????????????????????????????????????????????????????????????????????????
         * ????????????????????? <code>horizontalGap</code> ????????????????????????????????????????????????????????????????????????????????????????????????</p>
         *
         * <p>????????? <code>ColumnAlign.JUSTIFY_USING_WIDTH</code> ??????<code>columnWidth</code> ????????????????????????
         * ???????????????????????????????????????????????????????????????????????????????????????????????? <code>columnWidth</code> ?????????????????????????????????
         * ??????????????????????????????????????????????????????????????????</p>
         *
         * @default ColumnAlign.LEFT
         *
         * @version Egret 2.4
         * @version eui 1.0
         * @platform Web,Native
         * @language zh_CN
         */
        public get columnAlign():string {
            return this._columnAlign;
        }

        public set columnAlign(value:string) {
            if (this._columnAlign == value)
                return;

            this._columnAlign = value;
            this.invalidateTargetLayout();
        }

        /**
         * @private
         */
        private _rowAlign:string = RowAlign.TOP;
        /**
         * Specifies how to justify the fully visible rows to the container height.
         *
         * <p>When set to <code>RowAlign.TOP</code> it turns column justification off.
         * There might be partially visible rows or whitespace between the last row and
         * the bottom edge of the container.  This is the default value.</p>
         *
         * <p>When set to <code>RowAlign.JUSTIFY_USING_GAP</code> the <code>verticalGap</code>
         * actual value increases so that
         * the last fully visible row bottom edge aligns with the container's bottom edge.
         * In case there is only a single fully visible row, the value of <code>verticalGap</code>
         * increases so that it pushes any partially visible row beyond the bottom edge
         * of the container.  Note that explicitly setting the <code>verticalGap</code> does not turn off
         * justification, but just determines the initial gap value.
         * Justification can then increases it.</p>
         *
         * <p>When set to <code>RowAlign.JUSTIFY_USING_HEIGHT</code> the <code>rowHeight</code>
         * actual value increases so that
         * the last fully visible row bottom edge aligns with the container's bottom edge.  Note that
         * explicitly setting the <code>rowHeight</code> does not turn off justification, but
         * determines the initial row height value.
         * Justification can then increase it.</p>
         *
         * @default RowAlign.TOP
         *
         * @version Egret 2.4
         * @version eui 1.0
         * @platform Web,Native
         * @language en_US
         */
        /**
         * ??????????????????????????????????????????????????????
         *
         * <p>????????? <code>RowAlign.TOP</code> ????????????????????????????????????
         * ??????????????????????????????????????????????????????????????????????????????????????????????????????</p>
         *
         * <p>????????? <code>RowAlign.JUSTIFY_USING_GAP</code> ??????<code>verticalGap</code> ????????????????????????
         * ???????????????????????????????????????????????????????????????????????????????????????????????????????????????<code>verticalGap</code> ??????????????????
         * ????????????????????????????????????????????????????????????????????????????????????????????? <code>verticalGap</code>
         * ????????????????????????????????????????????????????????????????????????????????????????????????</p>
         *
         * <p>????????? <code>RowAlign.JUSTIFY_USING_HEIGHT</code> ??????<code>rowHeight</code> ????????????????????????
         * ??????????????????????????????????????????????????????????????????????????????????????????????????? <code>rowHeight</code>
         * ???????????????????????????????????????????????????????????????????????????????????????????????????</p>
         *
         * @default RowAlign.TOP
         *
         * @version Egret 2.4
         * @version eui 1.0
         * @platform Web,Native
         * @language zh_CN
         */
        public get rowAlign():string {
            return this._rowAlign;
        }

        public set rowAlign(value:string) {
            if (this._rowAlign == value)
                return;

            this._rowAlign = value;
            this.invalidateTargetLayout();
        }

        /**
         * @private
         */
        private _orientation:string = TileOrientation.ROWS;
        /**
         * Specifies whether elements are arranged row by row or
         * column by column.
         *
         * @default TileOrientation.ROWS
         *
         * @version Egret 2.4
         * @version eui 1.0
         * @platform Web,Native
         * @language en_US
         */
        /**
         * ??????????????????????????????????????????
         *
         * @default TileOrientation.ROWS
         *
         * @version Egret 2.4
         * @version eui 1.0
         * @platform Web,Native
         * @language zh_CN
         */
        public get orientation():string {
            return this._orientation;
        }

        public set orientation(value:string) {
            if (this._orientation == value)
                return;

            this._orientation = value;
            this.invalidateTargetLayout();
        }

        /**
         * @private
         * ????????????????????????????????????????????????
         */
        private invalidateTargetLayout():void {
            let target = this.$target;
            if (target) {
                target.invalidateSize();
                target.invalidateDisplayList();
            }
        }

        /**
         * @inheritDoc
         *
         * @version Egret 2.4
         * @version eui 1.0
         * @platform Web,Native
         */
        public measure():void {
            let target = this.$target;
            if (!target)
                return;

            let savedColumnCount = this._columnCount;
            let savedRowCount = this._rowCount;
            let savedColumnWidth = this._columnWidth;
            let savedRowHeight = this._rowHeight;

            let measuredWidth = 0;
            let measuredHeight = 0;

            let values = target.$UIComponent;
            this.calculateRowAndColumn(values[sys.UIKeys.explicitWidth], values[sys.UIKeys.explicitHeight]);
            let columnCount = this._requestedColumnCount > 0 ? this._requestedColumnCount : this._columnCount;
            let rowCount = this._requestedRowCount > 0 ? this._requestedRowCount : this._rowCount;
            let horizontalGap = isNaN(this._horizontalGap) ? 0 : this._horizontalGap;
            let verticalGap = isNaN(this._verticalGap) ? 0 : this._verticalGap;
            if (columnCount > 0) {
                measuredWidth = columnCount * (this._columnWidth + horizontalGap) - horizontalGap;
            }

            if (rowCount > 0) {
                measuredHeight = rowCount * (this._rowHeight + verticalGap) - verticalGap;
            }

            let hPadding = this._paddingLeft + this._paddingRight;
            let vPadding = this._paddingTop + this._paddingBottom;

            target.setMeasuredSize(measuredWidth + hPadding, measuredHeight + vPadding)

            this._columnCount = savedColumnCount;
            this._rowCount = savedRowCount;
            this._columnWidth = savedColumnWidth;
            this._rowHeight = savedRowHeight;
        }

        /**
         * @private
         * ?????????????????????????????????
         */
        private calculateRowAndColumn(explicitWidth:number, explicitHeight:number):void {
            let target = this.$target;
            let horizontalGap = isNaN(this._horizontalGap) ? 0 : this._horizontalGap;
            let verticalGap = isNaN(this._verticalGap) ? 0 : this._verticalGap;
            this._rowCount = this._columnCount = -1;
            let numElements = target.numElements;
            let count = numElements;
            for (let index = 0; index < count; index++) {
                let layoutElement = <UIComponent> (target.getElementAt(index));
                if (layoutElement && (!egret.is(layoutElement, UIComponentClass) || !layoutElement.$includeInLayout)) {
                    numElements--;
                    continue;
                }
            }
            if (numElements == 0) {
                this._rowCount = this._columnCount = 0;
                return;
            }

            if (isNaN(this.explicitColumnWidth) || isNaN(this.explicitRowHeight))
                this.updateMaxElementSize();

            if (isNaN(this.explicitColumnWidth)) {
                this._columnWidth = this.maxElementWidth;
            }
            else {
                this._columnWidth = this.explicitColumnWidth;
            }
            if (isNaN(this.explicitRowHeight)) {
                this._rowHeight = this.maxElementHeight;
            }
            else {
                this._rowHeight = this.explicitRowHeight;
            }

            let itemWidth = this._columnWidth + horizontalGap;
            //?????????????????????????????????
            if (itemWidth <= 0)
                itemWidth = 1;
            let itemHeight = this._rowHeight + verticalGap;
            if (itemHeight <= 0)
                itemHeight = 1;

            let orientedByColumns = (this._orientation == TileOrientation.COLUMNS);
            let widthHasSet = !isNaN(explicitWidth);
            let heightHasSet = !isNaN(explicitHeight);

            let paddingL = this._paddingLeft;
            let paddingR = this._paddingRight;
            let paddingT = this._paddingTop;
            let paddingB = this._paddingBottom;

            if (this._requestedColumnCount > 0 || this._requestedRowCount > 0) {
                if (this._requestedRowCount > 0)
                    this._rowCount = Math.min(this._requestedRowCount, numElements);

                if (this._requestedColumnCount > 0)
                    this._columnCount = Math.min(this._requestedColumnCount, numElements);
            }
            else if (!widthHasSet && !heightHasSet) {
                let side = Math.sqrt(numElements * itemWidth * itemHeight);
                if (orientedByColumns) {
                    this._rowCount = Math.max(1, Math.round(side / itemHeight));
                }
                else {
                    this._columnCount = Math.max(1, Math.round(side / itemWidth));
                }
            }
            else if (widthHasSet && (!heightHasSet || !orientedByColumns)) {
                let targetWidth = Math.max(0,
                    explicitWidth - paddingL - paddingR);
                this._columnCount = Math.floor((targetWidth + horizontalGap) / itemWidth);
                this._columnCount = Math.max(1, Math.min(this._columnCount, numElements));
            }
            else {
                let targetHeight = Math.max(0,
                    explicitHeight - paddingT - paddingB);
                this._rowCount = Math.floor((targetHeight + verticalGap) / itemHeight);
                this._rowCount = Math.max(1, Math.min(this._rowCount, numElements));
            }
            if (this._rowCount == -1)
                this._rowCount = Math.max(1, Math.ceil(numElements / this._columnCount));
            if (this._columnCount == -1)
                this._columnCount = Math.max(1, Math.ceil(numElements / this._rowCount));
            if (this._requestedColumnCount > 0 && this._requestedRowCount > 0) {
                if (this._orientation == TileOrientation.ROWS)
                    this._rowCount = Math.max(1, Math.ceil(numElements / this._requestedColumnCount));
                else
                    this._columnCount = Math.max(1, Math.ceil(numElements / this._requestedRowCount));
            }
        }

        /**
         * @private
         * ??????????????????????????????
         */
        private maxElementWidth:number = 0;
        /**
         * @private
         * ??????????????????????????????
         */
        private maxElementHeight:number = 0;

        /**
         * @private
         * ???????????????????????????
         */
        private updateMaxElementSize():void {
            if (!this.$target)
                return;
            if (this.$useVirtualLayout) {
                this.maxElementWidth = Math.max(this.maxElementWidth, this.$typicalWidth);
                this.maxElementHeight = Math.max(this.maxElementHeight, this.$typicalHeight);
                this.doUpdateMaxElementSize(this.startIndex, this.endIndex);
            }
            else {
                this.doUpdateMaxElementSize(0, this.$target.numElements - 1);
            }
        }

        /**
         * @private
         * ??????????????????????????????????????????
         */
        private doUpdateMaxElementSize(startIndex:number, endIndex:number):void {
            let maxElementWidth = this.maxElementWidth;
            let maxElementHeight = this.maxElementHeight;
            let bounds = egret.$TempRectangle;
            let target = this.$target;
            if ((startIndex != -1) && (endIndex != -1)) {
                for (let index = startIndex; index <= endIndex; index++) {
                    let elt = <UIComponent> target.getVirtualElementAt(index);
                    if (!egret.is(elt, UIComponentClass) || !elt.$includeInLayout) {
                        continue;
                    }
                    elt.getPreferredBounds(bounds);
                    maxElementWidth = Math.max(maxElementWidth, bounds.width);
                    maxElementHeight = Math.max(maxElementHeight, bounds.height);
                }
            }
            this.maxElementWidth = maxElementWidth;
            this.maxElementHeight = maxElementHeight;

        }

        /**
         * @inheritDoc
         *
         * @version Egret 2.4
         * @version eui 1.0
         * @platform Web,Native
         */
        public clearVirtualLayoutCache():void {
            super.clearVirtualLayoutCache();
            this.maxElementWidth = 0;
            this.maxElementHeight = 0;
        }

        /**
         * @private
         * ???????????????????????????????????????
         */
        private startIndex:number = -1;
        /**
         * @private
         * ?????????????????????????????????????????????
         */
        private endIndex:number = -1;
        /**
         * @private
         * ???????????????????????????????????????????????????????????????????????????
         */
        private indexInViewCalculated:boolean = false;

        /**
         * @inheritDoc
         *
         * @version Egret 2.4
         * @version eui 1.0
         * @platform Web,Native
         */
        public scrollPositionChanged():void {
            if (this.$useVirtualLayout) {
                let changed = this.getIndexInView();
                if (changed) {
                    this.indexInViewCalculated = true;
                    this.$target.invalidateDisplayList();
                }
            }

        }

        /**
         * @private
         * ??????????????????????????????????????????????????????,????????????????????????
         */
        private getIndexInView():boolean {
            if (!this.$target || this.$target.numElements == 0) {
                this.startIndex = this.endIndex = -1;
                return false;
            }

            let target = this.$target;
            let numElements = target.numElements;
            if (!this.$useVirtualLayout) {
                this.startIndex = 0;
                this.endIndex = numElements - 1;
                return false;
            }

            let values = target.$UIComponent;
            if (values[sys.UIKeys.width] == 0 || values[sys.UIKeys.height] == 0) {
                this.startIndex = this.endIndex = -1;
                return false;
            }
            let oldStartIndex = this.startIndex;
            let oldEndIndex = this.endIndex;
            let paddingL = this._paddingLeft;
            let paddingT = this._paddingTop;
            let horizontalGap = isNaN(this._horizontalGap) ? 0 : this._horizontalGap;
            let verticalGap = isNaN(this._verticalGap) ? 0 : this._verticalGap;
            if (this._orientation == TileOrientation.COLUMNS) {
                let itemWidth = this._columnWidth + horizontalGap;
                if (itemWidth <= 0) {
                    this.startIndex = 0;
                    this.endIndex = numElements - 1;
                    return false;
                }
                let minVisibleX = target.scrollH;
                let maxVisibleX = minVisibleX + values[sys.UIKeys.width];
                let startColumn = Math.floor((minVisibleX - paddingL) / itemWidth);
                if (startColumn < 0)
                    startColumn = 0;
                let endColumn = Math.ceil((maxVisibleX - paddingL) / itemWidth);
                if (endColumn < 0)
                    endColumn = 0;
                this.startIndex = Math.min(numElements - 1, Math.max(0, startColumn * this._rowCount));
                this.endIndex = Math.min(numElements - 1, Math.max(0, endColumn * this._rowCount - 1));
            }
            else {
                let itemHeight = this._rowHeight + verticalGap;
                if (itemHeight <= 0) {
                    this.startIndex = 0;
                    this.endIndex = numElements - 1;
                    return false;
                }
                let minVisibleY = target.scrollV;
                let maxVisibleY = minVisibleY + values[sys.UIKeys.height];
                let startRow = Math.floor((minVisibleY - paddingT) / itemHeight);
                if (startRow < 0)
                    startRow = 0;
                let endRow = Math.ceil((maxVisibleY - paddingT) / itemHeight);
                if (endRow < 0)
                    endRow = 0;
                this.startIndex = Math.min(numElements - 1, Math.max(0, startRow * this._columnCount));
                this.endIndex = Math.min(numElements - 1, Math.max(0, endRow * this._columnCount - 1));
            }

            return this.startIndex != oldStartIndex || this.endIndex != oldEndIndex;
        }

        /**
         * @inheritDoc
         *
         * @version Egret 2.4
         * @version eui 1.0
         * @platform Web,Native
         */
        public updateDisplayList(width:number, height:number):void {
            super.updateDisplayList(width, height);
            if (!this.$target)
                return;
            let target = this.$target;
            let paddingL = this._paddingLeft;
            let paddingR = this._paddingRight;
            let paddingT = this._paddingTop;
            let paddingB = this._paddingBottom;
            if (this.indexInViewCalculated) {
                this.indexInViewCalculated = false;
            }
            else {
                this.calculateRowAndColumn(width, height);
                if (this._rowCount == 0 || this._columnCount == 0) {
                    target.setContentSize(paddingL + paddingR, paddingT + paddingB);
                    return;
                }
                this.adjustForJustify(width, height);
                this.getIndexInView();
            }
            if (this.$useVirtualLayout) {
                this.calculateRowAndColumn(width, height);
                this.adjustForJustify(width, height);
            }

            if (this.startIndex == -1 || this.endIndex == -1) {
                target.setContentSize(0, 0);
                return;
            }
            let endIndex = this.endIndex;
            target.setVirtualElementIndicesInView(this.startIndex, endIndex);
            let elt:UIComponent;
            let x:number;
            let y:number;
            let columnIndex:number;
            let rowIndex:number;
            let orientedByColumns = (this._orientation == TileOrientation.COLUMNS);
            let index = this.startIndex;
            let horizontalGap = isNaN(this._horizontalGap) ? 0 : this._horizontalGap;
            let verticalGap = isNaN(this._verticalGap) ? 0 : this._verticalGap;
            let rowCount = this._rowCount;
            let columnCount = this._columnCount;
            let columnWidth = this._columnWidth;
            let rowHeight = this._rowHeight;
            for (let i = this.startIndex; i <= endIndex; i++) {
                if(this.$useVirtualLayout){
                    elt = <UIComponent> (this.target.getVirtualElementAt(i));
                }else{
                    elt = <UIComponent> (this.target.getElementAt(i));
                }
                if (!egret.is(elt, UIComponentClass) || !elt.$includeInLayout) {
                    continue;
                }

                if (orientedByColumns) {
                    columnIndex = Math.ceil((index + 1) / rowCount) - 1;
                    rowIndex = Math.ceil((index + 1) % rowCount) - 1;
                    if (rowIndex == -1)
                        rowIndex = rowCount - 1;
                }
                else {
                    columnIndex = Math.ceil((index + 1) % columnCount) - 1;
                    if (columnIndex == -1)
                        columnIndex = columnCount - 1;
                    rowIndex = Math.ceil((index + 1) / columnCount) - 1;
                }
                switch (this._horizontalAlign) {
                    case egret.HorizontalAlign.RIGHT:
                        x = width - (columnIndex + 1) * (columnWidth + horizontalGap) + horizontalGap - paddingR;
                        break;
                    case egret.HorizontalAlign.LEFT:
                        x = columnIndex * (columnWidth + horizontalGap) + paddingL;
                        break;
                    default:
                        x = columnIndex * (columnWidth + horizontalGap) + paddingL;
                }

                switch (this._verticalAlign) {
                    case egret.VerticalAlign.TOP:
                        y = rowIndex * (rowHeight + verticalGap) + paddingT;
                        break;
                    case egret.VerticalAlign.BOTTOM:
                        y = height - (rowIndex + 1) * (rowHeight + verticalGap) + verticalGap - paddingB;
                        break;
                    default:
                        y = rowIndex * (rowHeight + verticalGap) + paddingT;
                }
                
                this.sizeAndPositionElement(elt, x, y, columnWidth, rowHeight);
                index++;
            }

            let hPadding = paddingL + paddingR;
            let vPadding = paddingT + paddingB;
            let contentWidth = (columnWidth + horizontalGap) * columnCount - horizontalGap;
            let contentHeight = (rowHeight + verticalGap) * rowCount - verticalGap;
            target.setContentSize(contentWidth + hPadding, contentHeight + vPadding);
        }

        /**
         * @private
         * ?????????????????????
         */
        private sizeAndPositionElement(element:UIComponent, cellX:number, cellY:number,
                                       cellWidth:number, cellHeight:number):void {
            let elementWidth = NaN;
            let elementHeight = NaN;
            let values = element.$UIComponent;
            if (this._horizontalAlign == JustifyAlign.JUSTIFY)
                elementWidth = cellWidth;
            else if (!isNaN(values[sys.UIKeys.percentWidth]))
                elementWidth = cellWidth * values[sys.UIKeys.percentWidth] * 0.01;

            if (this._verticalAlign == JustifyAlign.JUSTIFY)
                elementHeight = cellHeight;
            else if (!isNaN(values[sys.UIKeys.percentHeight]))
                elementHeight = cellHeight * values[sys.UIKeys.percentHeight] * 0.01;


            element.setLayoutBoundsSize(Math.round(elementWidth), Math.round(elementHeight));

            let x = cellX;
            let bounds = egret.$TempRectangle;
            element.getLayoutBounds(bounds);
            switch (this._horizontalAlign) {
                case egret.HorizontalAlign.RIGHT:
                    x += cellWidth - bounds.width;
                    break;
                case egret.HorizontalAlign.CENTER:
                    x = cellX + (cellWidth - bounds.width) / 2;
                    break;
            }

            let y = cellY;
            switch (this._verticalAlign) {
                case egret.VerticalAlign.BOTTOM:
                    y += cellHeight - bounds.height;
                    break;
                case egret.VerticalAlign.MIDDLE:
                    y += (cellHeight - bounds.height) / 2;
                    break;
            }
            element.setLayoutBoundsPosition(Math.round(x), Math.round(y));
        }


        /**
         * @private
         * ??????????????????????????????????????????
         */
        private adjustForJustify(width:number, height:number):void {
            let paddingL = this._paddingLeft;
            let paddingR = this._paddingRight;
            let paddingT = this._paddingTop;
            let paddingB = this._paddingBottom;

            let targetWidth = Math.max(0, width - paddingL - paddingR);
            let targetHeight = Math.max(0, height - paddingT - paddingB);
            if (!isNaN(this.explicitVerticalGap))
                this._verticalGap = this.explicitVerticalGap;
            if (!isNaN(this.explicitHorizontalGap))
                this._horizontalGap = this.explicitHorizontalGap;
            this._verticalGap = isNaN(this._verticalGap) ? 0 : this._verticalGap;
            this._horizontalGap = isNaN(this._horizontalGap) ? 0 : this._horizontalGap;

            let offsetY = targetHeight - this._rowHeight * this._rowCount;
            let offsetX = targetWidth - this._columnWidth * this._columnCount;
            let gapCount;
            if (offsetY > 0) {
                if (this._rowAlign == RowAlign.JUSTIFY_USING_GAP) {
                    gapCount = Math.max(1, this._rowCount - 1);
                    this._verticalGap = offsetY / gapCount;
                }
                else if (this._rowAlign == RowAlign.JUSTIFY_USING_HEIGHT) {
                    if (this._rowCount > 0) {
                        this._rowHeight += (offsetY - (this._rowCount - 1) * this._verticalGap) / this._rowCount;
                    }
                }
            }
            if (offsetX > 0) {
                if (this._columnAlign == ColumnAlign.JUSTIFY_USING_GAP) {
                    gapCount = Math.max(1, this._columnCount - 1);
                    this._horizontalGap = offsetX / gapCount;
                }
                else if (this._columnAlign == ColumnAlign.JUSTIFY_USING_WIDTH) {
                    if (this._columnCount > 0) {
                        this._columnWidth += (offsetX - (this._columnCount - 1) * this._horizontalGap) / this._columnCount;
                    }
                }
            }
        }
    }
}
