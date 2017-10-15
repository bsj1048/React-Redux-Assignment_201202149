201202149 백승진


REDUX는 기존에 널리 사용되던 MVC패턴의 문제점을 보완하기 위해 FLUX라는 개념이 나왔고 이를 더욱 발전시킨 오픈소스 라이브러리이다. 

기존 MVC패턴의 문제점 :
MVC패턴에서는 Model과 View 사이에 상호작용이 존재하는데, 규모가 큰 코드가 될수록 이 부분이 많은 문제를 야기하고 코드를 복잡하게 만드는 원인이 된다.
> 이를 해결하기위해 FLUX라는 개념이 등장 

FLUX :
Dispatcher를 두고 View에서 발생한 Action을 MVC패턴에서 Model과 대응하는 Store에 직접 넘기지 않고 Dispatcher로 보내 우선순위로 Action을 처리함으로써 충돌을 피한다는 개념

REDUX :
FLUX를 좀 더 편하게 사용하게 해주는 구현체

REDUX의 3가지 원칙

1.Single Source of Truth
어플리케이션의 state를 위해 단 한 개의 store를 사용
> FLUX와 큰 차이점

2.State is Read-only
어플리케이션에서 store의 state를 직접 변경할 수 없다.
State를 변경하기 위해선 무조건 action이 dispatch되어야한다.

3.Changes are made with pure Functions
Reducer는 '순수 함수'로 작성되어야 한다.
디비접근 X, 인수변경 X
같은 인수 => 같은 결과

REDUX의 구성

Action Creator : Action을 처리할 수 있게 가공하는 역할 

Store : 
Dispatcher의 역할을 위임받음
어플리케이션의 상태를 가짐

Reducer : 
Action을 처리하는 함수
이전 상태를 받아 다음 상태를 반환한다.
예전 상태는 변경하지 않고 복사본을 만들고 변화시킴
> REDUX의 키 아이디어

View :
똑똑한 Component - 액션처리 책임
멍청한 Component- 전달받아 사용

View Layer Binding : Component와 Store를 연결


앞으로 해결해야할 문제
+) 서버를 사용해서인지 링크로 된 이미지말고 폴더의 상대경로를 이용하여 이미지를 사용하려고 하면 엑스박스가 나옴.