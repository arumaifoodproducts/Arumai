export interface Product {
    id: string;
    name: string;
    price: number;
    category: string;
    image: string;
    isOrganic?: boolean;
    description: string;
    ingredients?: string;
    benefits?: string[];
}

export const products: Product[] = [
    {
        id: 'm1',
        name: 'Finger Millet Noodles (Ragi) - Nutritious & Tasty',
        price: 95,
        category: 'Millet Noodles',
        image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&q=80&w=800',
        isOrganic: true,
        description: 'Experience the goodness of Ragi (Finger Millet) in a delicious noodle form. Our Ragi noodles are sun-dried, not fried, and contain no maida or preservatives. They are a rich source of calcium and iron, making them a perfect healthy meal for growing children and adults alike.',
        ingredients: 'Finger Millet Flour, Whole Wheat Flour, Salt, Purified Water.',
        benefits: ['Rich in Calcium', 'High Fiber Content', 'Gluten Free', 'No Preservatives']
    },
    {
        id: 'm2',
        name: 'Pearl Millet Pasta (Bajra) - Gluten Free',
        price: 120,
        category: 'Millet Pasta',
        image: 'https://images.unsplash.com/photo-1621800043295-dabb67d9652a?auto=format&fit=crop&q=80&w=800',
        isOrganic: true,
        description: 'Indulge in our artisanal Pearl Millet (Bajra) Pasta, crafted for those who love italian cuisine but want a healthier alternative. High in protein and magnesium, this pasta holds sauce beautifully and has a wonderful nutty flavor.',
        ingredients: 'Pearl Millet Flour, Cluster Bean Powder, Salt.',
        benefits: ['High Protein', 'Good for Heart Health', 'Gluten Free', 'Easy to Cook']
    },
    {
        id: 'm3',
        name: 'Barnyard Millet Mix (Kuthiraivali) - Weight Loss Special',
        price: 150,
        category: 'Millet Rice',
        image: 'https://images.unsplash.com/photo-1596560548464-f010549b84d7?auto=format&fit=crop&q=80&w=800',
        isOrganic: true,
        description: 'Barnyard Millet is known as the "weight loss millet" due to its high fiber and low glycemic index. This ready-to-cook mix makes it easy to prepare fluffy, healthy millet rice in minutes. Ideal for diabetic diet.',
        ingredients: 'Unpolished Barnyard Millet.',
        benefits: ['Low Glycemic Index', 'High Fiber', 'Rich in Iron', 'Helps in Weight Management']
    },
    {
        id: 'm4',
        name: 'Little Millet Flakes (Samai) - Perfect Breakfast',
        price: 110,
        category: 'Millet Flakes',
        image: 'https://images.unsplash.com/photo-1590779033100-9f60a05a013d?auto=format&fit=crop&q=80&w=800',
        isOrganic: true,
        description: 'Start your day with the light and crunchy goodness of Little Millet Flakes (Samai). Quick to cook and easy to digest, these flakes are perfect for making poha, chivda, or eating with milk as a cereal.',
        ingredients: 'Rolled Little Millet Grains.',
        benefits: ['High in Antioxidants', 'Rich in Magnesium', 'Quick Breakfast', 'Gluten Free']
    },
];
