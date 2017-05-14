using Windows.UI.Xaml.Controls;
using Windows.UI.Xaml.Input;

public class Library
{   
    public void Back(ref WebView web)
    {
        if (web.CanGoBack)
            web.GoBack();
    }

    public void Forward(ref WebView web)
    {
        if (web.CanGoForward)
            web.GoForward();
    }
    public void Go(ref WebView web, string value, KeyRoutedEventArgs args)
    {
        if (args.Key == Windows.System.VirtualKey.Enter)
        {
            try
            {
                web.Navigate(new System.Uri(value));
            }
            catch
            {

            }
            web.Focus(Windows.UI.Xaml.FocusState.Keyboard);
        }
    }
    public void Go1(ref WebView web)
    {
            try
            {
                web.Navigate(new System.Uri(@"https://www.youtube.com/embed/watch?v=ZK3O402wf1c&list=PL49CF3715CB9EF31D"));
            }
            catch
            {

            }
    }
    public void Go2(ref WebView web)
    {
        try
        {
            web.Navigate(new System.Uri(@"https://www.youtube.com/embed/watch?v=mbyG85GZ0PI&list=PLXIPmvMlpicGPhDuIDYWSSUeV8JVElsei"));
        }
        catch
        {

        }
    }
    public void Go3(ref WebView web)
    {
        try
        {
            web.Navigate(new System.Uri(@"https://www.youtube.com/tv#/watch?v=De3-5PpTY3o"));
        }
        catch
        {

        }
    }
    public void Go4(ref WebView web)
    {
        try
        {
            web.Navigate(new System.Uri(@"https://www.youtube.com/tv#/watch?v=GQ7kdlggtUU"));
        }
        catch
        {

        }
    }
    public void Go5(ref WebView web)
    {
        try
        {
            web.Navigate(new System.Uri(@"https://www.youtube.com/tv#/watch?v=PmNIf4p8g48"));
        }
        catch
        {

        }
    }
    public void Go6(ref WebView web)
    {
        try
        {
            web.Navigate(new System.Uri(@"https://www.youtube.com/tv#/watch?v=wVXVy7vJyYc"));
        }
        catch
        {

        }
    }
    public void Go7(ref WebView web)
    {
        try
        {
            web.Navigate(new System.Uri(@"https://www.youtube.com/tv#/watch?v=OctRQoCodVw"));
        }
        catch
        {

        }
    }
    public void Go8(ref WebView web)
    {
        try
        {
            web.Navigate(new System.Uri(@"https://www.youtube.com/tv#/watch?v=rnCLYoCdwyk"));
        }
        catch
        {

        }
    }
    public void Go9(ref WebView web)
    {
        try
        {
            web.Navigate(new System.Uri(@"https://www.youtube.com/tv#/watch?v=rPeGaos7DB4"));
        }
        catch
        {

        }
    }
    public void Go10(ref WebView web)
    {
        try
        {
            web.Navigate(new System.Uri(@"https://www.youtube.com/tv#/watch?v=_PwhiWxHK8o"));
        }
        catch
        {

        }
    }
}