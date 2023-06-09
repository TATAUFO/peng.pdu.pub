---
layout: default
---

## 本子的比喻

可以把社交网络想象成一个本子，每个用户都有属于自己的一页纸，用户能且只能在属于自己的那页纸上留言。任何人，不限于用户，都可以在本中任意翻看别人的留言。至于更复杂的功能，也只是在本子上添加了一些设定。回复消息，等于是在自己页写入某条留言时，标注此条内容和某页某行的内容有关；关注某几个人，等于翻开本子的时候只看特定几页；三天可见，等于定期将自己三天前写的东西涂掉，换一种只有自己能懂的密码再写一遍。

如果中心化社交网络的功能仅仅如此，那将其变为去中心化的结构就没有什么问题，只是变为每人都拥用有一个本子放在自己身边，本子上依然记着同样的东西。如果有人想写条新的留言，除了自己写在自己的本子上，还可以用喇叭广播，听到的人替他写在自己的本子上。而没听到的也就算了，毕竟只是一条消息。还有，在自己的本子上修改他人的留言也没什么意义，因为自己身边的本子只给你自己看。广播的时候你不能冒充别人，可以把数字签名当成每个人的声音的特点，别人听过一次就能记得，而你总也学的不够像。

但没过几天，出现了一个奇怪的现象，本子厚度迅速增加，翻倍的增加。一共也就一百个人却写了几十万页，为什么？因为虽然不能够准确模仿别人的声音，但是变声还是能行的。于是，个别人不停的变声，不停的写新的页，用一百种声音发布着自己的新留言，也许相同，也许相似，总之最后个别人的大量留言占据了本子的绝大多数页面，淹没了其他不同的声音。问题的出现是因为我们忽略了中心化系统存隐藏着一个管理员，而他负责想在本子上加一页纸的人收钱。哪怕不收钱，打那人两拳也可以，又或是查查证件，总之要新人付出点什么才成。新加一页纸有了成本，一个人再有钱，再抗揍，他所占据的比例也有限。

至此，构建去中心化系统所面临的第一个问题逐渐明确，**如何给用户创建附带必要的成本？**

假设上述问题能够解决，是否还存在别的漏洞？设想一下，如果某人A持续的在自己的页面上大量留言。此时，另一人B对A感兴趣，则依然会持续关注，A发的消息对于B来说并不是一种干扰，并无负面影响。而另一人C，对A不感兴趣，则可以不再将广播中A发布的消息记录在自己的本中，则A的任何行为也不会对C产生干扰。即便A尝试通过广播在其他人的本子上添加另一页，由于成本的存在，也使得A对于整体的干扰变得极为有限。

「其实这里解决了负向筛选的问题，而没有解决正向筛选的问题，正向的筛选靠社区解决，共同体。」

## 用户创建成本

在中心化的系统中，创建附带的成本可以有多种形式，但都由作为中心的单点负责执行，即前述比喻中那位隐藏的管理员。常见的方式有验证邮箱，验证手机号码，收费，验证身份信息等，而且只验证邮箱的方式由于附带的成本太低已经逐渐被抛弃。要注意的是，验证所产生的附加成本，并不是验证的动作所带来的，而是获取验证所需的信息过程带来。比如手机号的验证，其成本并不是指输入手机号，并填入验证码的动作，而是再购买第二个手机号的成本。比如身份验证，其成本指的是每人唯一的身份信息，或者冒着犯罪的危险购买的虚假身份信息的成本。还要说明的是这个管理员通常会认真地执行验证工作，因为当系统受到破坏时，和系统被视为一体的管理员就是最直接的受害者。

可当系统变为去中心化的结构时，上述成本如何等效的附加给用户？

首先需要明确的是现有方式都不可能由系统中单一个体（用户）代替整个系统执行，因为系统中的其他个体无法验证个体的验证结果。比如某个用户声明自己已经向新用户提供的手机号发送了验证码，并得到正确的回复，这件事本身不能被系统中其他用户所验证。而这种情况下，验证者不进行验证而直接使其通过就变得有利可图，而且损害是由系统承担。举例说明，比如当A已经有了一个用户身份之后，就可以通过声明完成验证的方式在系统中通过无限个由自己创建的新用户身份，而后续无限个由A控制的新身份的创建成本都近似于零。

所以需要系统内的个体都可以验证这个必须存在的用户创建成本，同时又需要创建的成本只付出一次。最先被想到的是Bitcoin所采用的工作量证明，只需要创建用户时去计算一个统一难度的数学题，题目的答案随着用户创建一起公布，系统中的每个个体都可以对结果进行验证。看似符合要求，问题解决了？不，答案是否定的。因为Bitcoin的工作量证明中，那个在相对固定时间内给出的答案是整个系统的计算结果，任何一个个体都被视为是系统的一部分，看似随机产生的答案对于整个系统来说却是一个必然的结果。那如果将难度调低会发生什么？比如任何人都可以用电脑五分钟算出一个结果，结果是工作量证明趋近于无成本。那可不可以让一个类似Bitcoin的区块链的系统每个块生成N个加密用户，用购买这个加密用户身份作为创建成本，这个貌似可行的途径，可以作为NFT的一种应用场景。虽然将用户创建从系统中剥离，但负责用户创建的应用本身也可视为另一个去中心化的应用。

为了验证上述附带成本方式是否可行，我们来做一个思维实验，将去中心化的社交网络看做一个小的村庄，村子中的每个村民就是网络中现有的用户，村民们之间可以自由交流，交流也是这个村子存在的意义和繁荣的标志。村子外面的人如果想进入村子生活，那么他们需要一张进村的通行证，那个通行证在村外某处定期制造。开始的时候，一切安好，村子中的人愉快的交流，隔段时间一些新人就会从村外购买通行证，成为新的村民。但随着这个村子的生活越来幸福，有些东西开始变化，先是入村的通行证卖的越来越贵，毕竟每隔一段时间就只多出几张通行证，而要的人多了，自然就越来越贵。新的村民也越来越少，随着通行证的价格上涨，部分通行证被黄牛抢购了，他们没有使用这些证件，而是坐等升值。通行证价格上涨还会造成一个后果，就是新村民不再仅仅为了愉快的交流而来，而是带有别的目的，那些能给他们带来巨大利益的目的，毕竟通行证真的不便宜。村民不再相信新的村民，但同时村子也因为缺少新鲜血液而逐渐无趣而开始没落。这个思维实现的结果并不像前述本子那个比喻中，一个人恶意的使用就可以破坏整个系统，但这种发展也是必然的，其根源在于行为和反馈所对应的主体并不一致。村民们努力营造一个幸福的村落，但并没有从通行证涨价中获取利益。高昂的通行证价格也将仅以自由交流为目的的新村民筛选掉，取而代之的是有从原村民处获取额外利益的新村民。我们可以得出这样的结论，由一个独立的外部系统附来加创建成本的方案由于不存在极端的破坏性，也许可以作为临时的方案或者小比例的补充方案，但不能作为系统发展过程中的常规方案，否则会对系统自身持续运行造成阻碍。

可以将思维实验中的每种角色能够得到的得利看成正的能量，将其付出看成负的能量。上述思维实验中的所有角色包括在内看做一个孤立的系统，这个系统的总能量是守恒的。新村民加入村子的过程中，新村民其本身的能量也是守恒的，因为他为通行证付出的成本所代表的负能量和对于加入村子能获得利益的期待所代表的正能量也是相等的。但是生产通行证的三方和黄牛是持续获得正能量的。因为孤立系统的能量守恒，所以必然有一方的能量变化为持续为负，而这种角色只能是现有村民。村民的能量的持续输出结果，必然会对村民的行为产生改变。而如果将村民个体看成一个独立系统，此系统持续的能量输出最终的结果一定是这个独立系统的消失。

现在，构建去中心化系统所面临的问题变为，**如何在去中心化的系统内给用户创建附带必要的成本？**

## 真实世界的答案

当面临困难的问题，通常有两种寻找答案途径。一是先设想一种解决方案，然后证明它可行。二是，找到一种已经被存在的可行方式，并说明它能解决这个问题。上一节中关于村子的思维实验采用第一种途径，我们虽然没有证明其可行，但是却给出了确定性的结果，而且升级了问题本身。现在我们尝试第二种途径继续寻找答案。

在真实的世界中是否有去中心化的系统？当然，我们所存在的就是一个去中心化的世界，构成物质的基本粒子，每个生物，星球，星系，无论将哪个作为个体都可以将世界或局部视为去中心化的系统。

至于用户创建，在跟生命相关的去中心化系统中，总是持续存在的。比如在人类社会中，其中每分钟随着婴儿出生，都创建出新的个体。同样如果以南极的企鹅作为系统，每年依然会有大量的小企鹅从蛋里孵化出来。再比如植物系统，像是森林中的树木，原野上的花草。我们习惯了他的存在也同时忽视了他的存在，这个成本就是**时间**。而且并不是指动物怀孕的时间，而是生物个体由自身创建到第一次进行创建个体之间必须存在的间隔，也是两次创建新的个体之间必须存在的间隔。这个时间的长短根据生物种类的不同差异巨大，但必然存在。有了时间，我们就可以已知为基础为所有的事件定义出必要的成本。

至此，最初的问题已经变为，**如何在去中心化的系统内部构建时间？**，解决了它也就解决了所有问题。

但现在又会有个疑问，时间是存在的，现实中的一分一秒都不停流逝，为什么还需要构建时间？在我们继续讨论时间本身之前，简单的解释是：我们都默认自己生活在一个时间只会单向，匀速流动的世界中，所以我们承担着由于时间而造成的成本，但不需要向别的人或事物去证明这个时间所带来的成本，因为对方也存在于其中，我们都仅存在于当前的一刻。但如果设想一下，你是一个更高维度的生物，你不但能够像人类一样，通过现在的史书了解历史，而且能够自主的选择在时间的维度上移动，触碰历史的真实，那会怎样？那这些生物如果依旧用时间作为成本度量，那他们需要证明**某件事是在其它事件之后发生**。更简单的解释，设想我现在发送一条标明时间为3021年的消息，难道别人就能够承认这条消息附带了100年的时间成本么？

不过，现实中的确存在可以被证实的时间，比如Bitcoin的主链，假如我发送的一条消息中，附带了某个块的签名，必然能够证明这条消息存在于这个块之后。只证明在其之后发生就可以，因为对于时间成本，我们也只要能够证明其足够多即可。至于以Bitcoin为代表的的区块链为何可以某种意义上替代时间，严格一点说是替代经典物理中的时间，需要在讨论时间的本身之后，再进行说明。


### 时间与光

《形而上学》开篇第一段话中写到”人们总是爱好感觉，而在诸感觉中，尤重视觉“。现在科学也表明，人类由视觉获取的信息占人类获取信息总量的80%以上。视觉即是对于光的感受，所以人类对于外部世界的感受超过80%是通过光来传递的，而对外界的感知，也是智慧的基础。以精神而论，人类在某种意义上可以被认为是光基的生命。

《狭义相对论》在抛弃了绝对时空的同时引入了光速不变。光速不变是指在任何惯性系中，光速不变。但这一条想来有些奇怪，试想两个惯性系，假设他们互相之间存在等于二分之一光速的相对速度，按照狭义相对论，在两个惯性系中的光速依然相同。只不过对于彼此而言，对方的时间都变了。看似奇怪的说法，却并没有错，为何？原因在于人类定义时间的方式。其实从经典物理到狭义相对论，爱因斯坦隐含着修改了时间的定义方式，更重要的是他的修改的更符合人类**天然**对于时间的理解，时间不是一种客观表现，而是一种主观感受。他并非决定于**发生方**，而决定于**接收方**。

无论超距作用是否存在，或者量子纠缠并不能传递信息。我们可以承认，光速是人类可以感知的最快的速度，而且其速度远超我们日常接触到的事物相对于我们自身的速度。当持续的光在接触到其他事物后，反射到眼睛，变为我们的感受时，人类会自然忽略掉光的传播速度对于观察本身造成的影响，而会下意识的认为自己的感受就是瞬时的。设想这样一个现实的场景，我们看到一个以一米每秒移动的物体正好移动到我们身前一米处，我们看到他从身边经过的时候，伸手去摸，是能够摸到的，而且触觉的反馈和视觉相一致。如果光速此时变得很慢，也是一米每秒，那会发生什么？当我们看到那个物体距离我们一米的时候，物体已经不在我们身前一米的地方，甚至我们的手在某个地方刚碰到物体的时候，眼中的手和物体之间还有一段距离。但现实中，后一种情况不会发生，因为身边的事物都运动的很慢，遥远的星辰也触摸不到。所以对于身边事物，我们忽略了光的影响，对于遥远的星辰，我们将我们的现在视为它的现在。

也正是因为光的速度和人类感官对于光的感受，所以将这个世界的其他事物持续的运动变化过程反应给人类。而这种持续的，有序的变化的叠加，带给我们的感受也就是我们所谓的时间。从文明伊始，光天然的就被作为时间定义的基石，这由人类的感官所决定。如果有某种更高等生物的存在，其也许能够感受到更快速的某种变化，相信它们也会有不同的时间的定义基础。

经典物理中的绝对时空中的时间，以光为基础而产生的有序事件的统计结果，其并不是一个精确的结果，而是以地球为空间位置，全人类的感受而得到的一个共识的结果。之所以对于这个结果能够产生共识，是因为在相近的空间位置和低速状态下，由于光速有限本身带来的误差小到不易被感知。

而从《狭义相对论》开始，对于不同的参照系，不再有统一的统计结果，对于不同的空间位置，也不再有相同的结果，虽然依然认为在惯性系的固定点有持续均匀的时间流速。从某种意义上说《狭义相对论》和《广义相对论》比经典物理更符合观测结果的原因也在于此，因为理论中包含了真实和观测之间由光所产生的影响。

