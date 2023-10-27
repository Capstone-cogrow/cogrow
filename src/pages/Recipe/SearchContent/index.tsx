import {
  Section,
  HeadTitle,
  ImageIcon,
  SearchForm,
  Fieldset,
  Input,
  SearchIcon
} from "./style";


const SearchContent = () => {

  return (
    <>
      <Section>
        <ImageIcon/> 
        <HeadTitle>어떤 레시피가 궁금하신가요?</HeadTitle>
        <SearchForm>
            <Fieldset>
              <Input type="text" name="recipe" placeholder="농작물을 검색해보세요." />
              <a href="/recipeList"><SearchIcon/></a>
            </Fieldset> 
        </SearchForm>             
      </Section>
      
    </>
  );
};

export default SearchContent;
