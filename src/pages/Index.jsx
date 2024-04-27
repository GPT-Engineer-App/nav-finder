// Complete the Index page component here
// Use chakra-ui
import React from "react";
import { Box, Button, Text, VStack, Input, Heading, List, ListItem } from "@chakra-ui/react";
import { FaLocationArrow, FaRoute } from "react-icons/fa";

const Index = () => {
  // State to hold addresses and the current location
  const [addresses, setAddresses] = React.useState(["1234 Elm Street, Springfield, IL", "5678 Maple Avenue, Lincoln, NE", "91011 Oak Boulevard, Jefferson City, MO"]);
  const [currentLocation, setCurrentLocation] = React.useState("500 Pine Road, Madison, WI");
  const [closestAddress, setClosestAddress] = React.useState("");

  // Function to simulate finding the closest address
  const findClosestAddress = () => {
    // This is a placeholder for actual geolocation logic
    setClosestAddress(addresses[0]); // Assume the first address is the closest for demonstration
  };

  // Handle input change for new addresses
  const handleAddressInput = (event) => {
    if (event.key === "Enter" && event.target.value.trim() !== "") {
      setAddresses([...addresses, event.target.value]);
      event.target.value = ""; // Clear input after adding
    }
  };

  return (
    <VStack spacing={4} p={5}>
      <Heading as="h1" size="xl">
        Navigation App
      </Heading>
      <Text>Current Location: {currentLocation}</Text>
      <Box>
        <Input placeholder="Add new address" onKeyPress={handleAddressInput} />
      </Box>
      <Button leftIcon={<FaLocationArrow />} colorScheme="teal" onClick={findClosestAddress}>
        Find Closest Address
      </Button>
      {closestAddress && (
        <Box mt={4}>
          <Text fontSize="lg">Closest Address:</Text>
          <Text fontSize="xl" fontWeight="bold">
            {closestAddress}
          </Text>
          <Button leftIcon={<FaRoute />} colorScheme="blue" mt={2}>
            Get Directions
          </Button>
        </Box>
      )}
      <Box w="100%">
        <Text fontSize="lg" mb={2}>
          All Addresses:
        </Text>
        <List spacing={2}>
          {addresses.map((address, index) => (
            <ListItem key={index} p={2} borderWidth="1px" borderRadius="lg">
              {address}
            </ListItem>
          ))}
        </List>
      </Box>
    </VStack>
  );
};

export default Index;
