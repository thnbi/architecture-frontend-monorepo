import { sum } from "@thnbi/utils/math/sum";
import { Text } from "@thnbi/design-system/components/Text";

export default function HomeScreen() {
  return (
    <main>
      <Text tag="h1">Home</Text>
      <Text tag="p">
        módulo local: @thnbi/utils/math/sum "sum(2,2)" = {sum(2, 2)}
      </Text>
    </main>
  );
}
