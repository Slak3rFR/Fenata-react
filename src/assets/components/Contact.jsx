import { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para enviar el formulario
        console.log('Formulario enviado:', formData);
        // Resetear el formulario
        setFormData({ name: '', email: '', message: '' });
        alert('¡Mensaje enviado! Gracias por contactarnos.');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-8">Contacto</h1>
                
                <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div>
                            <h2 className="text-xl font-bold mb-4">Información de Contacto</h2>
                            <div className="space-y-4">
                                <p className="flex items-center">
                                    <span className="mr-2">📍</span>
                                    Dirección: Calle Principal 123
                                </p>
                                <p className="flex items-center">
                                    <span className="mr-2">📞</span>
                                    Teléfono: (123) 456-7890
                                </p>
                                <p className="flex items-center">
                                    <span className="mr-2">✉️</span>
                                    Email: info@fenata.com
                                </p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-4">Horario de Atención</h2>
                            <div className="space-y-2">
                                <p>Lunes a Viernes: 9:00 - 18:00</p>
                                <p>Sábados: 9:00 - 13:00</p>
                                <p>Domingos: Cerrado</p>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                                Nombre
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                                Mensaje
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="4"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                        </div>
                        
                        <button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                        >
                            Enviar Mensaje
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact; 