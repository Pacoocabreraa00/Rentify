# Rentify: Marketplace de Propiedades

![Rentify Logo](/packages/Front-End/src/assets/logo.png)

## Descripción

Rentify es una plataforma digital diseñada como un marketplace de propiedades, similar a Idealista. Facilita la compra, venta y alquiler de inmuebles de manera eficiente y segura, proporcionando una interfaz intuitiva y funcionalidades avanzadas para mejorar la experiencia del usuario.

## Características

- Registro y autenticación de usuarios
- Publicación y gestión de listados de propiedades
- Búsqueda avanzada de propiedades
- Sistema de calificaciones y reseñas
- Notificaciones y alertas
- Mapas interactivos de propiedades

## Tecnologías Utilizadas

### Backend
- Node.js
- Express.js
- MongoDB
- JWT (JSON Web Tokens) para autenticación

### Frontend
- React.js
- Redux
- CSS / SASS

## Estructura del Proyecto

```plaintext
└── 📁TFG
    └── .gitignore
    └── lerna.json
    └── package-lock.json
    └── package.json
    └── 📁packages
        └── 📁Back-End
            └── .env
            └── .gitignore
            └── index.js
            └── 📁models
                └── Propiedad.js
                └── User.js
            └── package-lock.json
            └── package.json
            └── 📁routes
                └── auth.js
                └── googleApi.js
                └── propiedades.js
                └── user.js
            └── 📁uploads
                └── 1716226700929-1.png
                └── 1716279362938-Captura de pantalla 2023-11-22 181431.png
                └── 1716309046733-balneario-comedor-scaled.jpg
                └── 1716363440281-balneario-comedor-scaled.jpg
                └── 1716363440291-pexels-sadi-gokpinar-321165339-14365921.jpg
                └── 1716483187492-jacques-bopp-Hh18POSx5qk-unsplash.jpg
                └── 1716483187510-digital-marketing-agency-ntwrk-g39p1kDjvSY-unsplash.jpg
                └── 1716483187535-frames-for-your-heart-2d4lAQAlbDA-unsplash.jpg
                └── 1716483187548-frames-for-your-heart-mR1CIDduGLc-unsplash.jpg
                └── 1716483187563-greg-rivers-rChFUMwAe7E-unsplash.jpg
                └── 1716619986133-frames-for-your-heart-2d4lAQAlbDA-unsplash.jpg
                └── 1716619986177-frames-for-your-heart-mR1CIDduGLc-unsplash.jpg
                └── 1716619986218-greg-rivers-rChFUMwAe7E-unsplash.jpg
                └── 1716619986274-pixasquare-4ojhpgKpS68-unsplash.jpg
                └── 1716619986299-r-architecture-2gDwlIim3Uw-unsplash.jpg
                └── 1716619986337-scott-webb-1ddol8rgUH8-unsplash.jpg
                └── 1716645870604-phil-hearing-IYfp2Ixe9nM-unsplash.jpg
                └── 1716645870691-pixasquare-4ojhpgKpS68-unsplash.jpg
                └── 1716645870701-r-architecture-2gDwlIim3Uw-unsplash.jpg
                └── 1716645870712-scott-webb-1ddol8rgUH8-unsplash.jpg
                └── 1716645870729-sieuwert-otterloo-aren8nutd1Q-unsplash.jpg
                └── 1716645870773-tierra-mallorca-rgJ1J8SDEAY-unsplash.jpg
                └── 1716645870794-todd-kent-178j8tJrNlc-unsplash.jpg
                └── 1716645870904-vu-anh-TiVPTYCG_3E-unsplash.jpg
                └── 1716913916806-maarten-van-den-heuvel-yAsKqYbUQzY-unsplash.jpg
                └── 1716913916836-residential-house-process-building.jpg
                └── 1716913916895-jamar-penny-ZgmGq_eFmUs-unsplash.jpg
                └── 1716913941663-maarten-van-den-heuvel-yAsKqYbUQzY-unsplash.jpg
                └── 1716913941721-residential-house-process-building.jpg
                └── 1716913941783-jamar-penny-ZgmGq_eFmUs-unsplash.jpg
                └── 1716913955032-maarten-van-den-heuvel-yAsKqYbUQzY-unsplash.jpg
                └── 1716913955068-residential-house-process-building.jpg
                └── 1716913955161-jamar-penny-ZgmGq_eFmUs-unsplash.jpg
                └── 1716914557886-maarten-van-den-heuvel-yAsKqYbUQzY-unsplash.jpg
                └── 1716914557921-residential-house-process-building.jpg
                └── 1716914557978-jamar-penny-ZgmGq_eFmUs-unsplash.jpg
                └── 1716914557982-trabajadores-construccion-cascos-planean-rascacielos-usando-planos-trabajo-equipo-generado-ia_24640-99855.jpg
                └── 1716914579605-maarten-van-den-heuvel-yAsKqYbUQzY-unsplash.jpg
                └── 1716914579644-residential-house-process-building.jpg
                └── 1716914579703-jamar-penny-ZgmGq_eFmUs-unsplash.jpg
                └── 1716914579708-trabajadores-construccion-cascos-planean-rascacielos-usando-planos-trabajo-equipo-generado-ia_24640-99855.jpg
                └── 1717088622267-0af8caad-37b5-4e39-9e16-4279c5c4269f.jpeg
                └── 1717088622269-61d5051f-e90c-4730-8aeb-d6310df86131.jpeg
                └── 1717088622271-007621bb-903e-40a5-95ed-83830307b87e.jpeg
                └── 1717088622274-0fbecd1b-0bd6-4a15-ac91-e235c09e039a.jpeg
                └── 1717088622278-30d1a7af-f7c4-42f9-a2a5-b57a1d955105.jpeg
                └── 1717088622281-b8574b60-5e5a-4f68-aa12-9e6dbb0c14e7.jpeg
                └── 1717088645197-0af8caad-37b5-4e39-9e16-4279c5c4269f.jpeg
                └── 1717088645198-61d5051f-e90c-4730-8aeb-d6310df86131.jpeg
                └── 1717088645199-007621bb-903e-40a5-95ed-83830307b87e.jpeg
                └── 1717088645202-0fbecd1b-0bd6-4a15-ac91-e235c09e039a.jpeg
                └── 1717088645206-30d1a7af-f7c4-42f9-a2a5-b57a1d955105.jpeg
                └── 1717088645208-b8574b60-5e5a-4f68-aa12-9e6dbb0c14e7.jpeg
                └── image.png
        └── 📁Front-End
            └── 📁.angular
                └── 📁cache
                    └── 📁18.0.2
                        └── 📁Front-End
                            └── .tsbuildinfo
                            └── angular-compiler.db
                            └── angular-compiler.db-lock
                        └── 📁vite
                            └── 📁deps
                                └── @angular_common.js
                                └── @angular_common.js.map
                                └── @angular_common_http.js
                                └── @angular_common_http.js.map
                                └── @angular_core.js
                                └── @angular_core.js.map
                                └── @angular_forms.js
                                └── @angular_forms.js.map
                                └── @angular_google-maps.js
                                └── @angular_google-maps.js.map
                                └── @angular_platform-browser.js
                                └── @angular_platform-browser.js.map
                                └── @angular_router.js
                                └── @angular_router.js.map
                                └── chunk-APB5DJIQ.js
                                └── chunk-APB5DJIQ.js.map
                                └── chunk-CX7CVXXR.js
                                └── chunk-CX7CVXXR.js.map
                                └── chunk-DCHDNTXC.js
                                └── chunk-DCHDNTXC.js.map
                                └── chunk-G4XYUOPG.js
                                └── chunk-G4XYUOPG.js.map
                                └── chunk-I4ZAABJE.js
                                └── chunk-I4ZAABJE.js.map
                                └── chunk-MFXP226J.js
                                └── chunk-MFXP226J.js.map
                                └── chunk-WP63QTHE.js
                                └── chunk-WP63QTHE.js.map
                                └── package.json
                                └── rxjs.js
                                └── rxjs.js.map
                                └── rxjs_operators.js
                                └── rxjs_operators.js.map
                                └── _metadata.json
            └── .editorconfig
            └── .gitignore
            └── angular.json
            └── package-lock.json
            └── package.json
            └── README.md
            └── 📁src
                └── 📁app
                    └── app.component.css
                    └── app.component.html
                    └── app.component.spec.ts
                    └── app.component.ts
                    └── app.config.ts
                    └── app.routes.ts
                    └── 📁common
                        └── 📁footer
                            └── footer.component.css
                            └── footer.component.html
                            └── footer.component.spec.ts
                            └── footer.component.ts
                        └── 📁header
                            └── header.component.css
                            └── header.component.html
                            └── header.component.spec.ts
                            └── header.component.ts
                        └── 📁not-found
                            └── not-found.component.css
                            └── not-found.component.html
                            └── not-found.component.spec.ts
                            └── not-found.component.ts
                    └── 📁environments
                        └── environment.prod.ts
                        └── environment.ts
                    └── 📁guard
                        └── guard.guard.spec.ts
                        └── guard.guard.ts
                    └── 📁Home
                        └── home.component.css
                        └── home.component.html
                        └── home.component.spec.ts
                        └── home.component.ts
                    └── 📁Login
                        └── login.component.css
                        └── login.component.html
                        └── login.component.spec.ts
                        └── login.component.ts
                    └── 📁models
                        └── propiedad.model.ts
                    └── 📁propiedades
                        └── 📁cards-propiedades
                            └── cards-propiedades.component.css
                            └── cards-propiedades.component.html
                            └── cards-propiedades.component.spec.ts
                            └── cards-propiedades.component.ts
                        └── 📁crear-propiedad
                            └── crear-propiedad.component.css
                            └── crear-propiedad.component.html
                            └── crear-propiedad.component.spec.ts
                            └── crear-propiedad.component.ts
                        └── 📁propiedad-modal
                            └── propiedad-modal.component.css
                            └── propiedad-modal.component.html
                            └── propiedad-modal.component.spec.ts
                            └── propiedad-modal.component.ts
                        └── 📁propiedad-modal-user
                            └── propiedad-modal-user.component.css
                            └── propiedad-modal-user.component.html
                            └── propiedad-modal-user.component.spec.ts
                            └── propiedad-modal-user.component.ts
                        └── propiedades.component.css
                        └── propiedades.component.html
                        └── propiedades.component.spec.ts
                        └── propiedades.component.ts
                    └── 📁services
                        └── auth.service.spec.ts
                        └── auth.service.ts
                        └── autocomplete.service.spec.ts
                        └── autocomplete.service.ts
                        └── config.service.spec.ts
                        └── config.service.ts
                        └── propiedad.service.spec.ts
                        └── propiedad.service.ts
                    └── 📁sign-up
                        └── sign-up.component.css
                        └── sign-up.component.html
                        └── sign-up.component.spec.ts
                        └── sign-up.component.ts
                └── 📁assets
                    └── .gitkeep
                    └── 404.png
                    └── config.json
                    └── fondo.jpg
                    └── logo.png
                    └── Nombre.png
                └── favicon.ico
                └── index.html
                └── main.ts
                └── styles.css
            └── tailwind.config.js
            └── tsconfig.app.json
            └── tsconfig.json
            └── tsconfig.spec.json
    └── README.md
