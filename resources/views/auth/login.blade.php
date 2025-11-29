<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Login Page</title>

    <!-- CSS kamu -->
    <link rel="stylesheet" href="@vite(['resources/css/login.css'])
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
</head>

<body>
    <div class="container">

        <!-- FORM LOGIN Laravel -->
        <form class="login-form" method="POST" action="{{ route('login') }}">
            @csrf

          <div class=  "logo-section">
                <div class="logo-wrapper">
                    <img src="{{ Vite::asset('resources/image/logo_pi.png') }}" class="logo" alt="Logo">
                </div>
            </div>

            <div class="form">

                {{-- Email --}}
                <label for="email">Email</label>
                <input type="email"
                       id="email"
                       name="email"
                       class="input"
                       placeholder="Masukkan email"
                       required
                       autofocus />

                @error('email')
                    <p class="error">{{ $message }}</p>
                @enderror


                {{-- Password --}}
                <label for="password">Password</label>
                <input type="password"
                       id="password"
                       name="password"
                       class="input"
                       placeholder="Masukkan password"
                       required />

                @error('password')
                    <p class="error">{{ $message }}</p>
                @enderror


                <!-- Tombol Login -->
                <button type="submit" class="login-button">LOGIN</button>

            </div>
        </form>

    </div>
</body>

</html>
