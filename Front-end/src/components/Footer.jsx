import React from 'react'

const Footer = () => {
    return (
        <div>
            <hr />
            <footer className="footer p-2 md:p-10 text-base-content max-w-screen-2xl mx-auto flex flex-wrap mt-4 justify-evenly dark:text-white ">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <form className='justify-start'>
                    <h6 className="footer-title">Newsletter</h6>
                    <fieldset className="form-control w-aut">
                        <label className="label">
                            <span className="label-text dark:text-white ">Enter your email</span>
                        </label>
                        <div className="join ">
                            <input type="text" placeholder="username@site.com" className="input input-bordered join-item dark:bg-slate-500 dark:text-white" />
                            <button className="btn btn-primary join-item ">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>
        </div>
    )
}

export default Footer
