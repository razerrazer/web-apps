define([
    'jquery',
    'underscore',
    'backbone',
    'common/main/lib/util/utils',
    'common/main/lib/component/InputField',
    'common/main/lib/component/Button',
    'common/main/lib/component/Menu'
], function ($, _, Backbone) {
    'use strict';

    DE.Views.ApplicationView = Backbone.View.extend(_.extend({
        // Render layout
        render: function() {
            this.btnOptions = new Common.UI.Button({
                cls: 'btn-toolbar no-caret',
                iconCls: 'svg-icon more-vertical',
                menu: new Common.UI.Menu({
                    cls: 'shifted-right',
                    items: [
                        {caption: this.txtPrint, value: 'print', iconCls: 'mi-icon svg-icon print'},
                        {caption: '--'},
                        {caption: this.txtDownload, value: 'download', iconCls: 'mi-icon svg-icon download'},
                        {caption: this.txtDownloadDocx, value: 'download-docx', iconCls: 'mi-icon svg-icon download'},
                        {caption: this.txtDownloadPdf, value: 'download-pdf', iconCls: 'mi-icon'},
                        {caption: '--'},
                        {caption: this.txtTheme, value: 'theme', iconCls: 'mi-icon',
                            menu        : this.mnuThemes = new Common.UI.Menu({
                                cls: 'shifted-right',
                                menuAlign: 'tl-tr',
                                items: []
                            })
                        },
                        {caption: '--'},
                        {caption: this.txtShare, value: 'share', iconCls: 'mi-icon svg-icon share'},
                        {caption: this.txtFileLocation, value: 'close', iconCls: 'mi-icon svg-icon go-to-location'},
                        {caption: '--'},
                        {caption: this.txtEmbed, value: 'embed', iconCls: 'mi-icon svg-icon embed'},
                        {caption: this.txtFullScreen, value: 'fullscr', iconCls: 'mi-icon svg-icon fullscr'}
                    ]
                })
            });
            this.btnOptions.render($('#box-tools'));

            this.btnClear = new Common.UI.Button({
                cls: 'btn-toolbar',
                iconCls: 'svg-icon clear-style',
                caption: this.textClear
            });
            this.btnClear.render($('#id-btn-clear-fields'));

            this.btnNext = new Common.UI.Button({
                cls: 'btn-toolbar',
                iconCls: 'svg-icon arrow-down',
                caption: this.textNext
            });
            this.btnNext.render($('#id-btn-next-field'));

            this.btnPrev = new Common.UI.Button({
                cls: 'btn-toolbar',
                iconCls: 'svg-icon arrow-up'
            });
            this.btnPrev.render($('#id-btn-prev-field'));

            this.btnSubmit = new Common.UI.Button({
                cls: 'btn-text-default colored margin-left-small margin-right-small',
                caption: this.textSubmit
            });
            this.btnSubmit.render($('#id-submit-group'));

            this.btnDownload = new Common.UI.Button({
                cls: 'btn-text-default colored margin-left-small margin-right-small',
                caption: this.txtDownload,
                hint: this.txtDownloadPdf
            });
            this.btnDownload.render($('#id-download-group'));

            this.txtGoToPage = new Common.UI.InputField({
                el: $('#page-number'),
                cls: 'masked',
                allowBlank  : true,
                style       : 'width: 35px;',
                value: '1',
                maskExp: /[0-9]/
            });

            return this;
        },

        getContextMenu: function() {
            return new Common.UI.Menu({
                cls: 'shifted-right',
                items: [
                    { caption: this.textCut, value: 'cut', iconCls: 'mi-icon svg-icon cut' },
                    { caption: this.textCopy, value: 'copy', iconCls: 'mi-icon svg-icon copy' },
                    { caption: this.textPaste, value: 'paste', iconCls: 'mi-icon svg-icon paste' }
                ]
            });
        },

        txtDownload: 'Download',
        txtPrint: 'Print',
        txtShare: 'Share',
        txtEmbed: 'Embed',
        txtFullScreen: 'Full Screen',
        txtFileLocation: 'Open file location',
        txtDownloadDocx: 'Download as docx',
        txtDownloadPdf: 'Download as pdf',
        textNext: 'Next Field',
        textClear: 'Clear All Fields',
        textSubmit: 'Submit',
        txtTheme: 'Interface theme',
        textCut: 'Cut',
        textCopy: 'Copy',
        textPaste: 'Paste',
        textPrintSel: 'Print Selection',
        txtDarkMode: 'Dark mode'

    }, DE.Views.ApplicationView || {}));
});