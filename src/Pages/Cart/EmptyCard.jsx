import React from "react";

/**
 * EmptyCard
 * - Mobile responsive card design for "no items" / empty state.
 * - Props:
 *    - title (string)
 *    - description (string)
 *    - ctaText (string) - optional call-to-action button text
 *    - onCta (function) - optional click handler for CTA
 *    - showSkeleton (boolean) - if true shows a pulsing skeleton instead of content
 *
 * Usage:
 * <EmptyCard
 *   title="No products found"
 *   description="Try a different category or search term."
 *   ctaText="Browse All"
 *   onCta={() => navigate('/shops')}
 * />
 */

export default function EmptyCard({
  title = "Nothing to show here",
  description = "You don't have any items yet. Try adding something or change filters.",
  ctaText = "Browse Products",
  onCta,
  showSkeleton = false,
}) {
  return (
    <div className="w-full max-w-md mx-auto">
      <div
        className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-sm p-6 sm:p-8
                    flex flex-col items-center text-center gap-4
                    transform transition-all duration-200 hover:shadow-md"
        role="status"
        aria-live="polite"
      >
        {/* graphic / placeholder */}
        <div className="w-28 h-28 rounded-xl flex items-center justify-center bg-gray-50 dark:bg-gray-900 overflow-hidden">
          {showSkeleton ? (
            <div className="w-16 h-16 rounded-lg bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
          ) : (
            /* simple svg illustration */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 text-green-600 dark:text-green-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M3 7h18M5 7v12a1 1 0 001 1h12a1 1 0 001-1V7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 7V5a4 4 0 118 0v2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </div>

        {/* text */}
        <div className="w-full">
          {showSkeleton ? (
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-3/4 mx-auto animate-pulse"></div>
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-md w-5/6 mx-auto animate-pulse"></div>
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-md w-1/2 mx-auto animate-pulse"></div>
            </div>
          ) : (
            <>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">
                {title}
              </h3>
              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-300 leading-relaxed">
                {description}
              </p>
            </>
          )}
        </div>

        {/* actions */}
        {!showSkeleton && (
          <div className="w-full flex flex-col sm:flex-row items-center gap-3 mt-1">
            <button
              onClick={onCta}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-green-600 text-white font-medium shadow-sm hover:bg-green-700 transition"
            >
              {ctaText}
            </button>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-900 transition"
            >
              Back to top
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
