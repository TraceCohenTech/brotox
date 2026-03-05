import Link from "next/link";

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price?: string;
  referralLink: string;
  category: "treatment" | "product" | "clinic";
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const categoryColors = {
    treatment: "bg-primary/20 text-primary",
    product: "bg-accent/20 text-accent",
    clinic: "bg-emerald-500/20 text-emerald-400",
  };

  const categoryLabels = {
    treatment: "Treatment",
    product: "Product",
    clinic: "Clinic",
  };

  return (
    <div className="card p-6 flex flex-col h-full group hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/5">
      {/* Image placeholder */}
      <div className="relative w-full aspect-[4/3] bg-card-hover rounded-lg mb-4 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            className="w-16 h-16 text-muted/30"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
        {/* Category badge */}
        <span
          className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium ${categoryColors[product.category]}`}
        >
          {categoryLabels[product.category]}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-muted text-sm mb-4 flex-1">{product.description}</p>

        {/* Price and CTA */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
          {product.price && (
            <span className="text-lg font-semibold text-accent">
              {product.price}
            </span>
          )}
          <Link
            href={product.referralLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 ${
              product.price ? "btn-primary py-2 px-4" : "btn-primary"
            }`}
          >
            Learn More
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
