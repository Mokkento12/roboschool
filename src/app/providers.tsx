"use client";

import { Provider } from "react-redux";
import { store, persistor } from "@/store/store";
import { PersistGate } from "redux-persist/integration/react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";

// Создаем разных клиентов
const rickAndMortyClient = new ApolloClient({
  link: new HttpLink({ uri: "https://rickandmortyapi.com/graphql" }),
  cache: new InMemoryCache(),
});

const spaceXClient = new ApolloClient({
  link: new HttpLink({ uri: "https://spacex-production.up.railway.app/" }),
  cache: new InMemoryCache(),
});

// Используем Rick and Morty как основного клиента для всего приложения
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApolloProvider client={rickAndMortyClient}>{children}</ApolloProvider>
      </PersistGate>
    </Provider>
  );
}

// Экспортируем обоих для использования в компонентах
export { rickAndMortyClient, spaceXClient };
