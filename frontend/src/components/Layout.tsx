import { ReactNode, FC } from "react";
import { Link } from "react-router-dom";

interface Props {
  children: ReactNode;
}
export const Layout: FC<Props> = ({ children }) => (
  <div className="flex min-h-screen flex-col items-center justify-center font-mono text-gray-600">
    <header>
      <nav className="w-screen bg-gray-800">
        <div className="flex h-14 items-center pl-8">
          <div className="flex space-x-4">
            <Link
              className="rounded px-3 py-2 text-sm text-gray-300 hover:bg-gray-700"
              to="/"
            >
              react-query
            </Link>
            <Link
              className="rounded px-3 py-2 text-sm text-gray-300 hover:bg-gray-700"
              to="/fetch-a"
            >
              Regular fetch
            </Link>
            <Link
              className="rounded px-3 py-2 text-sm text-gray-300 hover:bg-gray-700"
              to="/main-context"
            >
              useContext
            </Link>
            <Link
              className="rounded px-3 py-2 text-sm text-gray-300 hover:bg-gray-700"
              to="/main-zustand"
            >
              zustand
            </Link>
          </div>
        </div>
      </nav>
    </header>
    <main className="flex w-screen flex-1 flex-col items-center justify-center">
      {children}
    </main>
  </div>
);
