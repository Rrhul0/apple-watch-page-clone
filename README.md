# Apple Watch Page Clone

This project is a clone of the [Apple Watch Studio](https://www.apple.com/shop/studio/apple-watch) page, allowing users to customize their Apple Watch by selecting different cases, bands, and sizes.

## Features

-   Multiple watch options: Choose from a variety of Apple Watch models.
-   Select different bands: Customize your watch with a wide range of bands.
-   Choose case size for each watch: Pick the perfect case size for your wrist.
-   View side profiles of the selected watch: See detailed side views of your customized watch. (**Not available for all selection for perpose of saving time**)
-   Real-time customization preview: Instantly see changes as you customize.
-   Responsive design for various devices: Enjoy a seamless experience on any device.
-   Smooth animations and transitions: Experience fluid and engaging interactions.
-   User-friendly interface: Navigate and customize with ease.
-   High-quality images for better visualization: Get a clear and detailed view of your selections.
-   Easy to navigate and use: Simple and intuitive design for all users.
-   Optimized for performance: Fast and efficient customization process.
-   Cross-browser compatibility: Works well on all major browsers.
-   Accessibility features included: Designed to be accessible for all users.
-   Regular updates and improvements: Continuously enhanced with new features.
-   Detailed documentation: Comprehensive guide to help you get started.

## Features not added

These listed features were not implemented due to enormous time taken by the project

-   Saving and sharing the watch selected and modified

-   Side view (partially added) saving all the images taking too much time

-   Real time price

## keys

-   [Installation](#installation)
-   [Usage](#usage)
-   [Project Structure](#project-structure)
-   [Technologies Used](#technologies-used)
-   [Contributing](#contributing)
-   [License](#license)

## Installation

To get started with this project, clone the repository and install the dependencies:

```bash
git clone https://github.com/Rrhul0/apple-watch-page-clone.git
cd apple-watch-page-clone
yarn install
```

## Usage

To run the project locally, use the following command:

```bash
yarn dev
```

This will start the development server at `http://localhost:3000`.

## Project Structure

```plaintext
.
├── app
│   ├── components
│   ├── constants.ts
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── store
│       └── store.ts
├── public
│   └── {all images are here}
├── .gitignore
├── package.json
└── README.md
```

## Technologies Used

-   [Next.js](https://nextjs.org/)
-   [React](https://reactjs.org/)
-   [Zustand](https://github.com/pmndrs/zustand)
-   CSS for styling

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License.
