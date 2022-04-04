import org.jnetpcap.packet.PcapPacket;

public class HandlePacket{
    
    private Port port;

    public void setHandler(Port port){
        this.port = port;
    }

    void ReadPacket(){
        for(int i = 0; i<port.acceptPacket.size(); i++){
            showPacket(port.acceptPacket.get(i));
        }
    }
    
	void showPacket(PcapPacket packet) {
		System.out.println("Packet");
		for(int i=0;i<packet.size();i++){
			if(i % 6 == 0 && i > 0 && i % 12 != 0) System.out.print("  ");
			else if(i % 12 == 0 && i > 0) System.out.println();
			int bajt  = packet.getUByte(i);
			if(bajt<16) System.out.print("0" + Integer.toHexString(bajt) + " ");
			else System.out.print(Integer.toHexString(bajt) + " ");
		}
		System.out.println();
	}
}
