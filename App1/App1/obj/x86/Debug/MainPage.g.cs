﻿#pragma checksum "C:\Users\Anson\Desktop\API emotion\App1\App1\MainPage.xaml" "{406ea660-64cf-4c82-b6f0-42d48172a799}" "7B140C7B1DC2F7E06980AFB13E6E5130"
//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace App1
{
    partial class MainPage : 
        global::Windows.UI.Xaml.Controls.Page, 
        global::Windows.UI.Xaml.Markup.IComponentConnector,
        global::Windows.UI.Xaml.Markup.IComponentConnector2
    {
        /// <summary>
        /// Connect()
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.Windows.UI.Xaml.Build.Tasks"," 14.0.0.0")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        public void Connect(int connectionId, object target)
        {
            switch(connectionId)
            {
            case 1:
                {
                    this.Value = (global::Windows.UI.Xaml.Controls.TextBox)(target);
                    #line 15 "..\..\..\MainPage.xaml"
                    ((global::Windows.UI.Xaml.Controls.TextBox)this.Value).KeyDown += this.Value_KeyDown;
                    #line 15 "..\..\..\MainPage.xaml"
                    ((global::Windows.UI.Xaml.Controls.TextBox)this.Value).TextChanged += this.Value_TextChanged;
                    #line default
                }
                break;
            case 2:
                {
                    this.Display = (global::Windows.UI.Xaml.Controls.WebView)(target);
                    #line 16 "..\..\..\MainPage.xaml"
                    ((global::Windows.UI.Xaml.Controls.WebView)this.Display).NavigationCompleted += this.Display_NavigationCompleted;
                    #line 16 "..\..\..\MainPage.xaml"
                    ((global::Windows.UI.Xaml.Controls.WebView)this.Display).LoadCompleted += this.Display_LoadCompleted;
                    #line default
                }
                break;
            case 3:
                {
                    this.image = (global::Windows.UI.Xaml.Controls.Image)(target);
                }
                break;
            case 4:
                {
                    this.output = (global::Windows.UI.Xaml.Controls.TextBox)(target);
                }
                break;
            case 5:
                {
                    this.takephoto = (global::Windows.UI.Xaml.Controls.Button)(target);
                    #line 19 "..\..\..\MainPage.xaml"
                    ((global::Windows.UI.Xaml.Controls.Button)this.takephoto).Click += this.takephoto_Click;
                    #line default
                }
                break;
            case 6:
                {
                    this.getEmotion = (global::Windows.UI.Xaml.Controls.Button)(target);
                    #line 20 "..\..\..\MainPage.xaml"
                    ((global::Windows.UI.Xaml.Controls.Button)this.getEmotion).Click += this.getEmotion_Click;
                    #line default
                }
                break;
            case 7:
                {
                    this.Strongly_Dislike = (global::Windows.UI.Xaml.Controls.Button)(target);
                    #line 21 "..\..\..\MainPage.xaml"
                    ((global::Windows.UI.Xaml.Controls.Button)this.Strongly_Dislike).Click += this.Strongly_Dislike_Click;
                    #line default
                }
                break;
            case 8:
                {
                    this.Dislike = (global::Windows.UI.Xaml.Controls.Button)(target);
                    #line 22 "..\..\..\MainPage.xaml"
                    ((global::Windows.UI.Xaml.Controls.Button)this.Dislike).Click += this.Dislike_Click;
                    #line default
                }
                break;
            case 9:
                {
                    this.Normal = (global::Windows.UI.Xaml.Controls.Button)(target);
                    #line 23 "..\..\..\MainPage.xaml"
                    ((global::Windows.UI.Xaml.Controls.Button)this.Normal).Click += this.Normal_Click;
                    #line default
                }
                break;
            case 10:
                {
                    this.Okay = (global::Windows.UI.Xaml.Controls.Button)(target);
                    #line 24 "..\..\..\MainPage.xaml"
                    ((global::Windows.UI.Xaml.Controls.Button)this.Okay).Click += this.Okay_Click;
                    #line default
                }
                break;
            case 11:
                {
                    this.Very_Good = (global::Windows.UI.Xaml.Controls.Button)(target);
                    #line 25 "..\..\..\MainPage.xaml"
                    ((global::Windows.UI.Xaml.Controls.Button)this.Very_Good).Click += this.Very_Good_Click;
                    #line default
                }
                break;
            case 12:
                {
                    this.output2 = (global::Windows.UI.Xaml.Controls.TextBox)(target);
                }
                break;
            case 13:
                {
                    this.Back = (global::Windows.UI.Xaml.Controls.AppBarButton)(target);
                    #line 33 "..\..\..\MainPage.xaml"
                    ((global::Windows.UI.Xaml.Controls.AppBarButton)this.Back).Click += this.Back_Click;
                    #line default
                }
                break;
            case 14:
                {
                    this.Forward = (global::Windows.UI.Xaml.Controls.AppBarButton)(target);
                    #line 34 "..\..\..\MainPage.xaml"
                    ((global::Windows.UI.Xaml.Controls.AppBarButton)this.Forward).Click += this.Forward_Click;
                    #line default
                }
                break;
            case 15:
                {
                    this.Refresh = (global::Windows.UI.Xaml.Controls.AppBarButton)(target);
                    #line 35 "..\..\..\MainPage.xaml"
                    ((global::Windows.UI.Xaml.Controls.AppBarButton)this.Refresh).Click += this.Refresh_Click;
                    #line default
                }
                break;
            case 16:
                {
                    this.Cancel = (global::Windows.UI.Xaml.Controls.AppBarButton)(target);
                    #line 36 "..\..\..\MainPage.xaml"
                    ((global::Windows.UI.Xaml.Controls.AppBarButton)this.Cancel).Click += this.Cancel_Click;
                    #line default
                }
                break;
            default:
                break;
            }
            this._contentLoaded = true;
        }

        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.Windows.UI.Xaml.Build.Tasks"," 14.0.0.0")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        public global::Windows.UI.Xaml.Markup.IComponentConnector GetBindingConnector(int connectionId, object target)
        {
            global::Windows.UI.Xaml.Markup.IComponentConnector returnValue = null;
            return returnValue;
        }
    }
}

