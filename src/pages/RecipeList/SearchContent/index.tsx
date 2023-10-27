import {
  Section,
  HeadTitle,
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
        <HeadTitle>어떤 레시피가 궁금하신가요?</HeadTitle>
        <SearchForm>
            <Fieldset>
              <Input type="text" name="recipe" placeholder="농작물을 검색해보세요." />
            </Fieldset>      
            <SearchIcon src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png"/>  
        </SearchForm>             
      </Section>
      
    </>
  );
};

export default SearchContent;
