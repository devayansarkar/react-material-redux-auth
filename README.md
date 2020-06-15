# React Material boiler plate with Redux and Firebase Authentication

Project created with `npx create-react-app --template typescript`. 


> Add Firebase api keys and credentials from firebase console to use Firebase auth


## Features
- Authentication with `Firebase`
- `HttpInterceptors` to pass tokens to backend for validation
- `MaterialUI` or design components

> To use `proxy` add the following in `package.json` in `root`
```json
{
    "proxy": "http://localhost:8080",
}
```

## Folder structure
```bash
├── LICENSE
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.css
│   ├── App.tsx
│   ├── components
│   │   └── StyledFilledChipButton.tsx
│   ├── config
│   │   ├── authentication
│   │   │   └── Firebase.ts
│   │   ├── http
│   │   │   └── HttpInterceptor.ts
│   │   ├── navigation
│   │   │   └── History.ts
│   │   ├── security
│   │   │   └── ProtectedRoute.tsx
│   │   └── store
│   │       └── Config.ts
│   ├── containers
│   │   ├── HomePageContainer.tsx
│   │   └── LoginPageContainer.tsx
│   ├── index.css
│   ├── index.tsx
│   ├── logo.svg
│   ├── models
│   │   ├── auth
│   │   │   ├── IApplicationState.ts
│   │   │   ├── ILoggedInUser.ts
│   │   │   ├── ILoginRequest.ts
│   │   │   └── IUserState.ts
│   │   ├── props
│   │   │   ├── components
│   │   │   │   └── IStyledFilledChipButtonProps.ts
│   │   │   └── pages
│   │   │       ├── IBasePageProps.ts
│   │   │       ├── IHomePageProps.ts
│   │   │       └── ILoginPageProps.ts
│   │   └── route
│   │       └── ProtectedRouteProps.ts
│   ├── pages
│   │   ├── account
│   │   │   └── Account.tsx
│   │   ├── authentication
│   │   │   └── Login.tsx
│   │   └── home
│   │       └── Home.tsx
│   ├── react-app-env.d.ts
│   ├── serviceWorker.ts
│   ├── setupTests.ts
│   ├── store
│   │   └── auth
│   │       ├── Actions.ts
│   │       ├── AuthState.ts
│   │       ├── Events.ts
│   │       ├── Reducers.ts
│   │       └── Thunk.ts
│   └── utilites
│       └── auth
│           └── FirebaseToAppStateMapper.ts
└── tsconfig.json
```