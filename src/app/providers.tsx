"use client";

import { Provider } from "react-redux";
import { store } from "@/store/store";
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

// Используем одного из них как основного
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ApolloProvider client={rickAndMortyClient}>{children}</ApolloProvider>
    </Provider>
  );
}

// Экспортируем обоих для использования в компонентах
export { rickAndMortyClient, spaceXClient };
