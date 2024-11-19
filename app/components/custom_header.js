import { Box } from "@/components/ui/box";

import CustomImageBackground from "../components/custom_image_background";

const CustomHeader = () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      p={4}
      className="p-3"
    >
      <Box flex={2} height={180}>
        <CustomImageBackground
          image={require("../../assets/images/ra.webp")}
          title="RA"
        />
      </Box>
      <Box width={10} />
      <Box flex={3} height={180}>
        <CustomImageBackground
          image={require("../../assets/images/modulos.jpg")}
          title="Módulos"
        />
      </Box>
    </Box>
  );
};

export default CustomHeader;
