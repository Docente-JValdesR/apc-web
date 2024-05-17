export default function App() {
  return (
    <div className="w-full">
      <footer className="bg-gray-800 py-20 mt-20">
        <div className="sm:grid grid-cols-3 w-4/5 pb-10 m-auto border-b-2 border-gray-700">
          <div>
            <h3 className="text-l sm:font-bold text-gray-100">Pages</h3>
            <ul className="py-4 sm:text-sm text-gray-400">
              <li className="pb-1">Home</li>
              <li className="pb-1">Services</li>
              <li className="pb-1">Projects</li>
              <li className="pb-1">About</li>
            </ul>
          </div>
          <div>
            <h3 className="text-l sm:font-bold text-gray-100">Services</h3>
            <ul className="py-4 sm:text-sm text-gray-400">
              <li className="pb-1">Web Design</li>
              <li className="pb-1">Web Development</li>
              <li className="pb-1">SEO</li>
              <li className="pb-1">E-Commerce</li>
            </ul>
          </div>
          <div>
            <h3 className="text-l sm:font-bold text-gray-100">Find Us</h3>
            <ul className="py-4 sm:text-sm text-gray-400">
              <li className="pb-1">123 Street</li>
              <li className="pb-1">Arturo Perez Canto</li>
              <li className="pb-1">Chile</li>
              <li className="pb-1">123-456-7890</li>
            </ul>
          </div>
        </div>
        <p className="w-25 w-4/5 pb-3 m-auto text-xs text-gray-100 pt-6">
          © Arturo Perez Canto 2021
        </p>
      </footer>
    </div>
  );
}
