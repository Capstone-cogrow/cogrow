import {
  Section,
  ImageIcon,
  SearchForm,
  Fieldset,
  Input,
  SearchIcon,
} from "./style";


const SearchContent = () => {

  return (
    <>
      <Section>
      <ImageIcon/> 
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
