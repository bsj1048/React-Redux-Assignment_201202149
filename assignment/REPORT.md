201202149 �����


REDUX�� ������ �θ� ���Ǵ� MVC������ �������� �����ϱ� ���� FLUX��� ������ ���԰� �̸� ���� ������Ų ���¼ҽ� ���̺귯���̴�. 

���� MVC������ ������ :
MVC���Ͽ����� Model�� View ���̿� ��ȣ�ۿ��� �����ϴµ�, �Ը� ū �ڵ尡 �ɼ��� �� �κ��� ���� ������ �߱��ϰ� �ڵ带 �����ϰ� ����� ������ �ȴ�.
> �̸� �ذ��ϱ����� FLUX��� ������ ���� 

FLUX :
Dispatcher�� �ΰ� View���� �߻��� Action�� MVC���Ͽ��� Model�� �����ϴ� Store�� ���� �ѱ��� �ʰ� Dispatcher�� ���� �켱������ Action�� ó�������ν� �浹�� ���Ѵٴ� ����

REDUX :
FLUX�� �� �� ���ϰ� ����ϰ� ���ִ� ����ü

REDUX�� 3���� ��Ģ

1.Single Source of Truth
���ø����̼��� state�� ���� �� �� ���� store�� ���
> FLUX�� ū ������

2.State is Read-only
���ø����̼ǿ��� store�� state�� ���� ������ �� ����.
State�� �����ϱ� ���ؼ� ������ action�� dispatch�Ǿ���Ѵ�.

3.Changes are made with pure Functions
Reducer�� '���� �Լ�'�� �ۼ��Ǿ�� �Ѵ�.
������� X, �μ����� X
���� �μ� => ���� ���

REDUX�� ����

Action Creator : Action�� ó���� �� �ְ� �����ϴ� ���� 

Store : 
Dispatcher�� ������ ���ӹ���
���ø����̼��� ���¸� ����

Reducer : 
Action�� ó���ϴ� �Լ�
���� ���¸� �޾� ���� ���¸� ��ȯ�Ѵ�.
���� ���´� �������� �ʰ� ���纻�� ����� ��ȭ��Ŵ
> REDUX�� Ű ���̵��

View :
�ȶ��� Component - �׼�ó�� å��
��û�� Component- ���޹޾� ���

View Layer Binding : Component�� Store�� ����