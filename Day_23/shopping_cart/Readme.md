##React Shopping Cart
This is a simple React-based shopping cart application with a focus on managing the cart state using the Context API and reducers. The application includes features such as adding items to the cart, adjusting quantities, and viewing the cart with the total price.

##Features
Add items to the cart
Adjust item quantities in the cart
Remove items from the cart
View the cart with the total price
Toggle the cart visibility
Close the cart by clicking outside of it
Disable body scrolling when the cart is open.

##Folder Structure
src/components: React components used in the application.
Cart.js: Cart component displaying the items in the cart.
Header.js: Header component with the cart icon.
ProductsCard.js: Component displaying individual product cards.
src/context: Context API related files.
cartContext.js: Context creation and export.
cartReducer.js: Reducer function for managing cart state.
src/data: Sample product data.
productsData.js: Data file containing information about products.
src/pages: React pages.
Home.js: Home page displaying product cards.
src/styles: Stylesheets.
App.css: Global styles.
Cart.css: Styles specific to the Cart component.
Header.css: Styles specific to the Header component.
ProductsCard.css: Styles specific to the ProductsCard component.
src/App.js: Main application component.
src/index.js: Entry point of the React application.
