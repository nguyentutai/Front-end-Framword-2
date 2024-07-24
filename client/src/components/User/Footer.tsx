import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-black">
      <div className="container-main grid grid-cols-4 gap-12">
        <div>
          <div>
            <img src="../../../public/images/logo-website.png" alt="" />
          </div>
          <p>
            Condimentum adipiscing vel neque dis nam parturient orci at
            scelerisque neque dis nam parturient.
          </p>
          <span>451 Wall Street, UK, London</span>
          <span>Phone: (064) 332-1233</span>
          <span>Fax: (099) 453-1357</span>
        </div>
        <div>
          <div className="w-full border-b-[3px] py-3">
            <h3 className="text-2xl font-bold w-fit tab-border-bottom relative text-white">
              Product Tags
            </h3>
          </div>
          <div>
            <div className="flex *:text-white/50 flex-wrap gap-2 pt-4 hover:*:text-white">
              <Link
                className="hover:bg-primary rounded-2xl py-1 px-2 duration-500"
                to={""}
              >
                Accessories
              </Link>
              <Link
                className="hover:bg-primary rounded-2xl py-1 px-2 duration-500"
                to={""}
              >
                Action
              </Link>
              <Link
                className="hover:bg-primary rounded-2xl py-1 px-2 duration-500"
                to={""}
              >
                Adventure
              </Link>
              <Link
                className="hover:bg-primary rounded-2xl py-1 px-2 duration-500"
                to={""}
              >
                Console
              </Link>
              <Link
                className="hover:bg-primary rounded-2xl py-1 px-2 duration-500"
                to={""}
              >
                Gamepad
              </Link>
              <Link
                className="hover:bg-primary rounded-2xl py-1 px-2 duration-500"
                to={""}
              >
                HeaderPhone
              </Link>
              <Link
                className="hover:bg-primary rounded-2xl py-1 px-2 duration-500"
                to={""}
              >
                Mouse & Keyboard
              </Link>
              <Link
                className="hover:bg-primary rounded-2xl py-1 px-2 duration-500"
                to={""}
              >
                Roll Player
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full border-b-[3px] py-3">
            <h3 className="text-2xl font-bold w-fit after:!bg-green-400 tab-border-bottom  relative text-white">
              Footer Menu
            </h3>
          </div>
          <div>
            <div className="flex *:text-white/50 flex-wrap gap-2 pt-4 hover:*:text-white">
              <Link
                className="hover:bg-primary rounded-2xl py-1 px-2 duration-500"
                to={""}
              >
                Accessories
              </Link>
              <Link
                className="hover:bg-primary rounded-2xl py-1 px-2 duration-500"
                to={""}
              >
                Action
              </Link>
              <Link
                className="hover:bg-primary rounded-2xl py-1 px-2 duration-500"
                to={""}
              >
                Adventure
              </Link>
              <Link
                className="hover:bg-primary rounded-2xl py-1 px-2 duration-500"
                to={""}
              >
                Console
              </Link>
              <Link
                className="hover:bg-primary rounded-2xl py-1 px-2 duration-500"
                to={""}
              >
                Gamepad
              </Link>
              <Link
                className="hover:bg-primary rounded-2xl py-1 px-2 duration-500"
                to={""}
              >
                HeaderPhone
              </Link>
              <Link
                className="hover:bg-primary rounded-2xl py-1 px-2 duration-500"
                to={""}
              >
                Mouse & Keyboard
              </Link>
              <Link
                className="hover:bg-primary rounded-2xl py-1 px-2 duration-500"
                to={""}
              >
                Roll Player
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full border-b-[3px] py-3">
            <h3 className="text-2xl font-bold w-fit after:!bg-red-600 tab-border-bottom  relative text-white">
              Footer Categories
            </h3>
          </div>
          <div>
            <div className="flex *:text-white/50 flex-wrap gap-2 pt-4 hover:*:text-white">
              <Link
                className="hover:bg-primary rounded-2xl py-1 px-2 duration-500"
                to={""}
              >
                Accessories
              </Link>
              <Link
                className="hover:bg-primary rounded-2xl py-1 px-2 duration-500"
                to={""}
              >
                Action
              </Link>
              <Link
                className="hover:bg-primary rounded-2xl py-1 px-2 duration-500"
                to={""}
              >
                Adventure
              </Link>
              <Link
                className="hover:bg-primary rounded-2xl py-1 px-2 duration-500"
                to={""}
              >
                Console
              </Link>
              <Link
                className="hover:bg-primary rounded-2xl py-1 px-2 duration-500"
                to={""}
              >
                Gamepad
              </Link>
              <Link
                className="hover:bg-primary rounded-2xl py-1 px-2 duration-500"
                to={""}
              >
                HeaderPhone
              </Link>
              <Link
                className="hover:bg-primary rounded-2xl py-1 px-2 duration-500"
                to={""}
              >
                Mouse & Keyboard
              </Link>
              <Link
                className="hover:bg-primary rounded-2xl py-1 px-2 duration-500"
                to={""}
              >
                Roll Player
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
