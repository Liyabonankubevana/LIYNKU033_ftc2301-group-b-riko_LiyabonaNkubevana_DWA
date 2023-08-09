export const Genre = () => {
    const genres = [
        'Personal Growth',
        'True Crime and Investigative Journalism',
        'History',
        'Comedy',
        'Entertainment',
        'Business',
        'Fiction',
        'News',
        'Kids and Family',
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {genres.map((genre, index) => (
                <div key={index} className="bg-black bg-opacity-50 p-4">
                    <h2 className="text-white text-lg font-semibold mb-2">{genre}</h2>
                </div>
            ))}
        </div>
    );
};
