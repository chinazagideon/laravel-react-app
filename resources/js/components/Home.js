import React from "react";
import ReactDOM from "react-dom";

function Home() {
    return (<>
        <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow sm:rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-6">
                    <div className="flex items-center">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                        <div className="ml-4 text-lg leading-7 font-semibold"><a href="https://laravel.com/docs" className="underline text-gray-900 dark:text-white">Documentation</a></div>
                    </div>

                    <div className="ml-12">
                        <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                            Laravel has wonderful, thorough documentation covering every aspect of the framework. Whether you are new to the framework or have previous experience with Laravel, we recommend reading all of the documentation from beginning to end.
                        </div>
                    </div>
                </div>

                <div className="p-6 border-t border-gray-200 dark:border-gray-700 md:border-t-0 md:border-l">
                    <div className="flex items-center">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500"><path d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        <div className="ml-4 text-lg leading-7 font-semibold"><a href="https://laracasts.com" className="underline text-gray-900 dark:text-white">Laracasts</a></div>
                    </div>

                    <div className="ml-12">
                        <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                            Laracasts offers thousands of video tutorials on Laravel, PHP, and JavaScript development. Check them out, see for yourself, and massively level up your development skills in the process.
                        </div>
                    </div>
                </div>

                <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500"><path d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>
                        <div className="ml-4 text-lg leading-7 font-semibold"><a href="https://laravel-news.com/" className="underline text-gray-900 dark:text-white">Laravel News</a></div>
                    </div>

                    <div className="ml-12">
                        <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                            Laravel News is a community driven portal and newsletter aggregating all of the latest and most important news in the Laravel ecosystem, including new package releases and tutorials.
                        </div>
                    </div>
                </div>

                <div className="p-6 border-t border-gray-200 dark:border-gray-700 md:border-l">
                    <div className="flex items-center">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500"><path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <div className="ml-4 text-lg leading-7 font-semibold text-gray-900 dark:text-white">Vibrant Ecosystem</div>
                    </div>

                    <div className="ml-12">
                        <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                            Laravel's robust library of first-party tools and libraries, such as <a href="https://forge.laravel.com" className="underline">Forge</a>, <a href="https://vapor.laravel.com" className="underline">Vapor</a>, <a href="https://nova.laravel.com" className="underline">Nova</a>, and <a href="https://envoyer.io" className="underline">Envoyer</a> help you take your projects to the next level. Pair them with powerful open source libraries like <a href="https://laravel.com/docs/billing" className="underline">Cashier</a>, <a href="https://laravel.com/docs/dusk" className="underline">Dusk</a>, <a href="https://laravel.com/docs/broadcasting" className="underline">Echo</a>, <a href="https://laravel.com/docs/horizon" className="underline">Horizon</a>, <a href="https://laravel.com/docs/sanctum" className="underline">Sanctum</a>, <a href="https://laravel.com/docs/telescope" className="underline">Telescope</a>, and more.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default Home;


if(document.getElementById('home')){
    ReactDOM.render(<Home />, document.getElementById('home'))
}
