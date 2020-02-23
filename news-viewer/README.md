출처: 리액트를 다루는 기술(개정판) 저자: 김민준

리액트 프로젝트 생성방법
npm install -g create-react-app
create-react-app 프로젝트명
cd 프로젝트명
npm start

14장 외부 api를 연동하여 뉴스 뷰어 만들기

1) styled-components
참조:https://blog.nerdfactory.ai/2019/10/25/react-styled-components.html


2) useState
- useState는 가장 기본적인 Hook으로서, 함수형 컴포넌트에서 상태를 관리해야 되는 일이 발생한다면
이 Hook을 사용하면 된다.
- 예시
	
	const [value, setValue] = useState(0); // 비구조화 할당(배열)
	
	return (
	
	  <div>
	    <p>현재 카운터 값은 <b>{value}</b> 입니다.</p>
	  <button onClick={()=>setValue(value+1)}>+1</button>
	
	);



3) useCallback

	- 렌더링 성능을 최적화해야하는 상황에서 사용
	- 이벤트 핸들러 함수를 필요할때만 생성가능
	- 컴포넌트가 리렌더링될 때마다 함수들이 새로 생성될때 발생하는 비용을 해결하기 위해 사용

	- 예시
	
		const onChange = useCallback(e=>{
			setNumber(e.target.value);
		},[]); // 컴포넌트가 처음 렌더링될때만 함수생성.

		const onInsert = useCallback(()=>{
			const nextList = list.concat(parseInt(number));
			setList(nextList);
			setNumber('');
		},[number,list]); // number 혹은 list가 바뀌었을때만 함수 생성



4) 비구조화 할당(객체)

	const article = {
	  title:'제목',
	  description: '내용',
	  url: 'https://google.com',
	  urlToImage: 'https://via.placeholder.com'
	};
	const {title, description, url, urlToImage} = article;

	같은 의미
	title = article.title;
	description = article.description;
	url = article.url
	urlToImage = article.urlToImage;



5) javascript 문자열 ``


6) 리액트 라우터

	- 설치: npm install react-router-dom 
	- <Route path="/:category?" component={}/>
	- 물음표 문자는 category 값이 있을 수도 있고 없을 수도 있다는 의미를 말한다.
	- 이 예에서는 category URL 파라미터가 없다면 전체 카테고리를 선택한 것으로 간주하였음.
	- exact의 용도


7) usePromise
	- 컴포넌트에서 API 호출처럼 Promise를 사용해야 하는 경우 더욱 간결하게 코드를 작성할 수 있도록 해주는 커스텀 Hook

