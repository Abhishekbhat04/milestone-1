import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "../ui/Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid relative h-screen grid-rows-[auto_1fr]">
      {isLoading && <Loader />}
      <Header />
      <div className="overflow-scroll scrollbar-hide">
        <main className="max-w-3xl mx-auto">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
