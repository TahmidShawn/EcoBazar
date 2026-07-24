const teamMembers = [
    {
        id: 1,
        name: "John Doe",
        role: "Founder",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVyc29ufGVufDB8fDB8fHww",
    },
    {
        id: 2,
        name: "Sophia",
        role: "Farmer",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        id: 3,
        name: "Simon Konecki",
        role: "Marketing",
        image: "https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        id: 4,
        name: "Mark Adair",
        role: "Customer Support",
        image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
];

const Team = () => {
    return (
        <section className="wrapper">
            <div className="mx-auto mb-14 max-w-2xl text-center">
                <p className="text-primary mb-3 font-semibold uppercase tracking-widest">
                    Our Awesome Team
                </p>

                <h2 className="text-text mb-5 text-4xl font-semibold">
                    Meet Our Organic Experts
                </h2>

                <p className="text-muted">
                    Pellentesque a ante vulputate leo porttitor luctus sed eget
                    eros. Nulla et rhoncus neque. Duis non diam eget est luctus
                    tincidunt a a mi.
                </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {teamMembers.map((member) => (
                    <div
                        key={member.id}
                        className="group overflow-hidden rounded-xl border border-border bg-white"
                    >
                        <div className="overflow-hidden">
                            <img
                                src={member.image}
                                alt={member.name}
                                loading="lazy"
                                className="h-80 w-full object-cover "
                            />
                        </div>

                        <div className="p-5 text-center">
                            <h3 className="text-text text-xl font-semibold">
                                {member.name}
                            </h3>

                            <p className="text-muted mt-2">{member.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Team;
