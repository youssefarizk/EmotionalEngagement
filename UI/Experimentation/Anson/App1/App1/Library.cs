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
                web.Navigate(new System.Uri(@"https://www.youtube.com/watch?v=-v-mCK_tXL4"));
            }
            catch
            {

            }
    }
    public void Go2(ref WebView web)
    {
        try
        {
            web.Navigate(new System.Uri(@"https://google.com"));
        }
        catch
        {

        }
    }
    public void Go3(ref WebView web)
    {
        try
        {
            web.Navigate(new System.Uri(@"https://google.com"));
        }
        catch
        {

        }
    }
    public void Go4(ref WebView web)
    {
        try
        {
            web.Navigate(new System.Uri(@"https://google.com"));
        }
        catch
        {

        }
    }
    public void Go5(ref WebView web)
    {
        try
        {
            web.Navigate(new System.Uri(@"https://google.com"));
        }
        catch
        {

        }
    }
    public void Go6(ref WebView web)
    {
        try
        {
            web.Navigate(new System.Uri(@"https://google.com"));
        }
        catch
        {

        }
    }
    public void Go7(ref WebView web)
    {
        try
        {
            web.Navigate(new System.Uri(@"https://google.com"));
        }
        catch
        {

        }
    }
    public void Go8(ref WebView web)
    {
        try
        {
            web.Navigate(new System.Uri(@"https://google.com"));
        }
        catch
        {

        }
    }
    public void Go9(ref WebView web)
    {
        try
        {
            web.Navigate(new System.Uri(@"https://google.com"));
        }
        catch
        {

        }
    }
    public void Go10(ref WebView web)
    {
        try
        {
            web.Navigate(new System.Uri(@"https://google.com"));
        }
        catch
        {

        }
    }
}