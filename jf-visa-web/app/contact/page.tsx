import { CONFIG } from "@/lib/config";

export default function Contact() {
    return (
        <>
            <div className="page-header">
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>Get in touch for expert visa advice</p>
                </div>
            </div>

            <section className="section-padding">
                <div className="container grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-12 max-w-[1000px] mx-auto">

                    <div className="contact-info">
                        <div className="contact-info-box bg-white p-8 rounded-lg shadow-sm">
                            <h3 className="text-primary text-xl font-bold mb-6">Contact Information</h3>

                            <div className="info-item flex items-start gap-4 mb-8">
                                <i className="fa-solid fa-location-dot text-[var(--color-accent)] text-2xl mt-1"></i>
                                <div>
                                    <h4 className="font-bold mb-1">Visit Us</h4>
                                    <p>{CONFIG.address}</p>
                                </div>
                            </div>

                            <div className="info-item flex items-start gap-4 mb-8">
                                <i className="fa-solid fa-phone text-[var(--color-accent)] text-2xl mt-1"></i>
                                <div>
                                    <h4 className="font-bold mb-1">Call Us</h4>
                                    <p><a href={`tel:${CONFIG.phone.replace(/\s/g, '')}`}>{CONFIG.phone}</a></p>
                                </div>
                            </div>

                            <div className="info-item flex items-start gap-4 mb-8">
                                <i className="fa-solid fa-envelope text-[var(--color-accent)] text-2xl mt-1"></i>
                                <div>
                                    <h4 className="font-bold mb-1">Email Us</h4>
                                    <p><a href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a></p>
                                </div>
                            </div>

                            <div className="mt-8">
                                <a
                                    href={`https://wa.me/${CONFIG.whatsapp}`}
                                    className="btn btn-outline w-full text-center text-white flex justify-center items-center gap-2"
                                    style={{ backgroundColor: '#25D366', borderColor: '#25D366' }}
                                >
                                    <i className="fa-brands fa-whatsapp"></i> Chat on WhatsApp
                                </a>
                            </div>
                        </div>

                        {/* Google Map Embed Placeholder for Rawalpindi */}
                        <div className="map-container w-full h-[300px] mt-8 rounded-lg overflow-hidden shadow-sm">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13269.176466986687!2d73.047882!3d33.6007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df948974419acb%3A0x984357e1b57406a4!2sAdam%20Jee%20Rd%2C%20Saddar%2C%20Rawalpindi%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
                        </div>
                    </div>

                    <div className="contact-form bg-white p-8 rounded-lg shadow-md h-fit">
                        <h3 className="text-primary text-xl font-bold mb-6">Send us a message</h3>
                        <form>
                            <div className="form-group mb-6">
                                <label className="block mb-2 font-medium">Full Name</label>
                                <input type="text" placeholder="John Doe" required className="w-full p-2 border border-[var(--color-border)] rounded font-body" />
                            </div>
                            <div className="form-group mb-6">
                                <label className="block mb-2 font-medium">Email Address</label>
                                <input type="email" placeholder="john@example.com" required className="w-full p-2 border border-[var(--color-border)] rounded font-body" />
                            </div>
                            <div className="form-group mb-6">
                                <label className="block mb-2 font-medium">Phone Number</label>
                                <input type="tel" placeholder="+92 306..." required className="w-full p-2 border border-[var(--color-border)] rounded font-body" />
                            </div>
                            <div className="form-group mb-6">
                                <label className="block mb-2 font-medium">Interested In</label>
                                <select className="w-full p-2 border border-[var(--color-border)] rounded font-body">
                                    <option>Canada Visit Visa</option>
                                    <option>Australia/NZ Visit Visa</option>
                                    <option>USA Visit Visa</option>
                                    <option>Europe Study Visa</option>
                                    <option>GCC Work Visa</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="form-group mb-6">
                                <label className="block mb-2 font-medium">Message</label>
                                <textarea placeholder="Tell us about your requirements..." className="w-full p-2 border border-[var(--color-border)] rounded font-body min-h-[120px] resize-y"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary w-full">Send Message</button>
                        </form>
                    </div>

                </div>
            </section>
        </>
    );
}
