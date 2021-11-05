import { useState, useRef, Dispatch, SetStateAction } from "react";
import { Box, Image } from "rebass/styled-components";
import styled from "styled-components";
import DownArrow from "../../assets/DownArrow.svg";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

const DropDownContainer = styled(Box)`
  width: 10.5rem;
  margin: 0 auto;
`;

const DropDownHeader = styled(Box)`
  padding: 1rem 0rem 0.4rem 0rem;
  font-weight: 500;
  color: black;
`;

const DropDownListContainer = styled(Box)<{ isOpen: boolean }>`
  position: absolute;
  z-index: 100;
  width: 10rem;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1rem;
  background: white;
  border: 2px solid black;
  box-sizing: border-box;
  color: black;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8rem;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8rem;
  &:hover {
    text-decoration: underline;
  }
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: row;
`;

interface DropDownProps {
  title: string;
  options: string[];
  selectedOption: string;
  setSelectedOption: Dispatch<SetStateAction<string>>;
}

export const DropDown = ({
  title,
  options,
  selectedOption,
  setSelectedOption,
}: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const node = useRef<HTMLDivElement>(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: string) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  useOnClickOutside(node, () => setIsOpen(false));

  return (
    <DropDownContainer ref={node}>
      <DropDownHeader onClick={toggling}>
        <StyledBox>
          {selectedOption || title}
          <Image
            marginLeft="0.5rem"
            height="15px"
            width="15px"
            src={DownArrow}
          />
        </StyledBox>
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer isOpen={isOpen}>
          <DropDownList>
            {options.map((option) => (
              <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                {option}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
};
