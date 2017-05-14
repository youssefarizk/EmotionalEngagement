using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Diagnostics;
using System.Runtime.InteropServices.WindowsRuntime;
using Windows.Foundation;
using Windows.Foundation.Collections;
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;
using Windows.UI.Xaml.Controls.Primitives;
using Windows.UI.Xaml.Data;
using Windows.UI.Xaml.Input;
using Windows.UI.Xaml.Media;
using Windows.UI.Xaml.Navigation;
using Windows.Media.Capture;
using Windows.Storage;
using Windows.Graphics.Imaging;
using Windows.UI.Xaml.Media.Imaging;
using Windows.Storage.Streams;
using Microsoft.ProjectOxford.Emotion;
using Microsoft.ProjectOxford.Emotion.Contract;
using System.Diagnostics;

namespace App1
{
    /// <summary>
    /// An empty page that can be used on its own or navigated to within a Frame.
    /// </summary>
    public sealed partial class MainPage : Page
    {
        




        Library Library = new Library();

        CameraCaptureUI captureUI = new CameraCaptureUI();
        StorageFile photo;
        IRandomAccessStream imageStream;

        const string APIKEY = "5a00fa33702a4a85bfc18fb906eb90ba";

        EmotionServiceClient emotionServiceClient = new EmotionServiceClient(APIKEY);
        Emotion[] emotionResult;


        public MainPage()
        {
            this.InitializeComponent();
            captureUI.PhotoSettings.Format = CameraCaptureUIPhotoFormat.Jpeg;
            captureUI.PhotoSettings.CroppedSizeInPixels = new Size(500, 500);
        }

        private async void takephoto_Click(object sender, RoutedEventArgs e)
        {
            try
            {
                photo = await captureUI.CaptureFileAsync(CameraCaptureUIMode.Photo);

                if (photo == null)
                {
                    return;
                }
                else
                {
                    imageStream = await photo.OpenAsync(FileAccessMode.Read);
                    BitmapDecoder decoder = await BitmapDecoder.CreateAsync(imageStream);
                    SoftwareBitmap softwareBitmap = await decoder.GetSoftwareBitmapAsync();
                    SoftwareBitmap softwareBitmapBGR8 = SoftwareBitmap.Convert(softwareBitmap, BitmapPixelFormat.Bgra8, BitmapAlphaMode.Premultiplied);
                    SoftwareBitmapSource bitmapSource = new SoftwareBitmapSource();

                    await bitmapSource.SetBitmapAsync(softwareBitmapBGR8);
                    image.Source = bitmapSource;

                }


            }
            catch
            {
                output.Text = "Error";

            }

        }

        private async void getEmotion_Click(object sender, RoutedEventArgs e)
        {
            try
            {
                emotionResult = await emotionServiceClient.RecognizeAsync(imageStream.AsStream());
                if (emotionResult != null)
                {
                   
                    output.Text = "Your emotions are: \n" +
                        "Happiness: " + emotionResult[0].Scores.Happiness + "\n" +
                        "Sadness: " + emotionResult[0].Scores.Sadness + "\n" +
                        "Surprise: " + emotionResult[0].Scores.Fear + "\n" +
                        "Fear: " + emotionResult[0].Scores.Fear + "\n" +
                        "Anger: " + emotionResult[0].Scores.Anger + "\n" +
                        "Contempt: " + emotionResult[0].Scores.Contempt + "\n" +
                        "Disgust: " + emotionResult[0].Scores.Disgust + "\n" +
                        "Neutral: " + emotionResult[0].Scores.Neutral + "\n";
                    if (emotionResult[0].Scores.Happiness > 0.7 | emotionResult[0].Scores.Sadness > 0.7 | emotionResult[0].Scores.Fear > 0.7 | emotionResult[0].Scores.Surprise > 0.7)
                    {
                        output2.Text = "You like the video.";
                    } else if (emotionResult[0].Scores.Neutral > 0.7)
                    {
                        output2.Text = "You neither like nor dislike the video.";
                     } else
                    {
                        output2.Text = "You dislike the video.";
                    }
                }
            }
            catch
            {
                output.Text = "Error returning the emotion";
                output2.Text = "Error";
            }
        }
        
        private void Display_NavigationCompleted(WebView sender, WebViewNavigationCompletedEventArgs args)
        {
           
            if (args.IsSuccess)
            {
                Value.Text = args.Uri.ToString();
            }
        }

        private void Back_Click(object sender, RoutedEventArgs e)
        {
            Library.Back(ref Display);
        }

        private void Value_KeyDown(object sender, KeyRoutedEventArgs e)
        {
            Library.Go(ref Display, Value.Text, e);
        }

        private void Forward_Click(object sender, RoutedEventArgs e)
        {
            Library.Forward(ref Display);
        }

        private void Refresh_Click(object sender, RoutedEventArgs e)
        {
            Display.Refresh();
        }

        private void Cancel_Click(object sender, RoutedEventArgs e)
        {
            Display.Stop();
        }

        private void Display_LoadCompleted(object sender, NavigationEventArgs e)
        {

        }

        private void Value_TextChanged(object sender, TextChangedEventArgs e)
        {

        }

        private void video1_Click(object sender, RoutedEventArgs e)
        {
            Library.Go1(ref Display);
        }

        private void video2_Click(object sender, RoutedEventArgs e)
        {
            Library.Go2(ref Display);
        }

        private void video3_Click(object sender, RoutedEventArgs e)
        {
            Library.Go3(ref Display);
        }

        private void video4_Click(object sender, RoutedEventArgs e)
        {
            Library.Go4(ref Display);
        }

        private void video5_Click(object sender, RoutedEventArgs e)
        {
            Library.Go5(ref Display);
        }

        private void video6_Click(object sender, RoutedEventArgs e)
        {
            Library.Go6(ref Display);
        }

        private void video7_Click(object sender, RoutedEventArgs e)
        {
            Library.Go7(ref Display);
        }

        private void video8_Click(object sender, RoutedEventArgs e)
        {
            Library.Go8(ref Display);
        }

        private void video9_Click(object sender, RoutedEventArgs e)
        {
            Library.Go9(ref Display);
        }

        private void video10_Click(object sender, RoutedEventArgs e)
        {
            Library.Go10(ref Display);
        }
    }
}
