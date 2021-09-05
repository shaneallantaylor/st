export default function HeroCard() {
  return (
    <div className="relative px-4 sm:max-w-xl sm:mx-auto m-6">
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-900 to-yellow-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-2 sm:rounded-3xl" />
      <div className="relative rounded  ml-auto p-8 bg-heatherYellow shadow">
        <img
          className="inline float-right h-64 mb-4 ml-4 -mt-4 -mr-8"
          src="ill.png"
          alt="Shane"
        />
        <p className="text-base self-center">
          a b c d e f g h i j k l m n o p q r s t u v w x y z a b c d e f g h i
          j k l m n o p q r s t u v w x y z a b c d e f g h i j k l m n o p q r
          s t u v w x y z a b c d e f g h i j k l m n o p q r s t u v w x y z a
          b c d e f g h i j k l m n o p q r s t u v w x y z a b c d e f g h i j
          k l m n o p q r s t u v w x y z a b c d e f g h i j k l m n o p q r s
          t u v w x y z a b c d e f g h i j k l m n o p q r s t u v w x y z a b
          c d e f g h i j k l m n o p q r s t u v w x y z. Look, I used
          tailwind! Much wow!
        </p>
      </div>
    </div>
  );
}
