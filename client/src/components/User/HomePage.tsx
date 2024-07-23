import Banner from "./Banner";

const HomePage = () => {
  return (
    <div className="w-full -mt-2">
      <section className="w-full">
        <Banner />
      </section>
      <section className="container-main py-6 dark:text-white">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6 lg:col-span-3 flex gap-4 items-center border-r">
            <div>
              <img
                src="https://hex-wp.com/gamemart/wp-content/uploads/2024/03/return_image.png"
                alt=""
              />
            </div>
            <div>
              <h3 className="font-bold mb-2">Money Return</h3>
              <p className="text-sm">Back guarantee under 7 days</p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3 flex gap-4 items-center border-r">
            <div>
              <img
                src="https://hex-wp.com/gamemart/wp-content/uploads/2024/03/shipped_image.png"
                alt=""
              />
            </div>
            <div>
              <h3 className="font-bold mb-2">Free Shipping</h3>
              <p className="text-sm">Free shipping on all order</p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3 flex gap-4 items-center border-r">
            <div>
              <img
                src="https://hex-wp.com/gamemart/wp-content/uploads/2024/03/support_image.png"
                alt=""
              />
            </div>
            <div>
              <h3 className="font-bold mb-2">Online Support 24/7</h3>
              <p className="text-sm">Support online 24 hours</p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3 flex gap-4 items-center">
            <div>
              <img
                src="https://hex-wp.com/gamemart/wp-content/uploads/2024/03/discount_image.png"
                alt=""
              />
            </div>
            <div>
              <h3 className="font-bold mb-2">Member Discount</h3>
              <p className="text-sm">Onevery order over $120.00</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
