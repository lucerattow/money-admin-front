import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme";
import { Layout } from "@/components/layout";
import { useAppStore } from "@/lib/context";
import { IUser } from "@/lib/interfaces";
import { routes } from "@/lib/constants";
import { Dashboard, CreditCards, CreditCardDetails, Transactions, Login, Register } from "@/pages";

function App() {
  const setUser = useAppStore((state) => state.setUser);
  const user = useAppStore((state) => state.user);

  useEffect(() => {
    const newUser: IUser = {
      displayName: "Lucas Ceratto",
      email: "luceratto@gmail.com",
      image: "https://avatars.githubusercontent.com/u/72511202?v=4",
    };
    setUser(newUser);
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Layout loggedIn={!!user}>
          <Routes>
            {user ? (
              <>
                <Route path={routes.home} element={<Dashboard />} />
                <Route path={routes.creditCards} element={<CreditCards />} />
                <Route path={routes.creditCardsSummary} element={<CreditCardDetails />} />
                <Route path={routes.transactions} element={<Transactions />} />
              </>
            ) : (
              <>
                <Route path={routes.home} element={<Login />} />
                <Route path={routes.register} element={<Register />} />
              </>
            )}
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
