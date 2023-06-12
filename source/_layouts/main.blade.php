<!DOCTYPE html>
<html lang="{{ $page->language ?? 'en' }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="canonical" href="{{ $page->getUrl() }}">
        <link rel="icon" type="image/x-icon" href="https://camjam-01.github.io/borg-cube/assets/images/jigsaw.png">
        <meta name="description" content="{{ $page->description }}">
        <title>{{ $page->title }}</title>
        <link rel="stylesheet" href="https://camjam-01.github.io/borg-cube{{ mix('css/main.css', 'assets/build') }}">
        <script defer src="https://camjam-01.github.io/borg-cube{{ mix('js/main.js', 'assets/build') }}"></script>
    </head>
    <body class="text-gray-900 font-sans antialiased">
        @yield('body')
    </body>
</html>
