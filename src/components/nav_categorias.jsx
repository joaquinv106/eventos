import { Component } from 'react';

class NavCategorias extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                { id: 1, name: 'TODOS', isActive: true },
                { id: 2, name: 'MÚSICA' },
                { id: 3, name: 'ARTE' },
                { id: 4, name: 'TEATRO' },
                { id: 5, name: 'CINE' },
                { id: 6, name: 'GASTRONOMÍA' },
                { id: 7, name: 'TECH' },
                { id: 8, name: 'FESTIVAL' }
            ],
            totalEvents: 6,
            activeCategory: 'TODOS'
        };
    }

    componentDidMount() {
        // Aquí puedes hacer la llamada a tu API
        // this.fetchCategories();
    }

    handleCategoryClick = (categoryName) => {
        this.setState({ activeCategory: categoryName });
        // Aquí puedes llamar a tu función de filtrado o callback
        if (this.props.onCategoryChange) {
            this.props.onCategoryChange(categoryName);
        }
    }

    render() {
        const { categories, totalEvents, activeCategory } = this.state;

        return (
            <section className=" py-12 px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Título y subtítulo */}
                    <div className="mb-10 flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <h1 className="text-5xl font-black !text-black" style={{ color: '#000000' }}>EVENTOS</h1>
                            <div className="w-1 h-12 bg-lime-400"></div>
                        </div>
                        <span className="text-gray-500 text-sm font-semibold tracking-widest uppercase">
                            {totalEvents} DISPONIBLES
                        </span>
                    </div>

                    {/* Botones de categorías */}
                    <div className="flex flex-wrap gap-3">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => this.handleCategoryClick(category.name)}
                                className={`
                                    px-6 py-3 font-bold text-xs uppercase tracking-wider
                                    border-2 rounded-lg transition-all duration-300
                                    ${activeCategory === category.name
                                        ? 'bg-lime-400 border-lime-400 text-white shadow-lg shadow-lime-400/50'
                                        : 'bg-white border-gray-200 text-gray-700 hover:bg-lime-400 hover:text-white hover:shadow-md hover:shadow-lime-400/20'
                                    }
                                `}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default NavCategorias;
