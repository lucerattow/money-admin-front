import { Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme";
import { Layout } from "@/components/layout";
import { useAppStore } from "@/zustand";
import { User } from "@/interfaces";
import { routes } from "@/utils/constants";
import React from "react";
import { PageSkeleton } from "./components/shared/PageSkeleton";

const CreditCardDetails = React.lazy(() => import("@/pages/credit-card-details"));
const CreditCards = React.lazy(() => import("@/pages/credit-cards"));
const Dashboard = React.lazy(() => import("@/pages/dashboard"));
const Login = React.lazy(() => import("@/pages/login"));
const Register = React.lazy(() => import("@/pages/register"));
const Transactions = React.lazy(() => import("@/pages/transactions"));

function App() {
  const setUser = useAppStore((state) => state.setUser);
  const user = useAppStore((state) => state.user);

  useEffect(() => {
    const newUser: User = {
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
          <Suspense fallback={<PageSkeleton />}>
            <Routes>
              {user ? (
                <>
                  <Route path={routes.home} element={<Dashboard />} />
                  <Route path={routes.creditCards} element={<CreditCards />} />
                  <Route path={routes.creditCardsDetails} element={<CreditCardDetails />} />
                  <Route path={routes.transactions} element={<Transactions />} />
                </>
              ) : (
                <>
                  <Route path={routes.home} element={<Login />} />
                  <Route path={routes.register} element={<Register />} />
                </>
              )}
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
